"use strict"
const userValidator = require("../validators/UserValidator");
const userRepository = require("../repositories/UserRepository")
const{StatusCodes}= require("http-status-codes")
const {createJWT} =require("../utils/jwt")
const bcrypt =require("bcryptjs")


exports.createUser =async(body, options)=>{
 try{
    const validatorError = await userValidator.createUser(body);
    if(validatorError) return{
        error: validatorError,
        statusCode:StatusCodes.UNPROCESSABLE_ENTITY
    }
    const { email } = body

    const alreadyExistsUser = await userRepository.findOne({ email }).catch(
      (err) => {
        console.log("Error: ", err);
      });

    if (alreadyExistsUser) return {
      error: "User already exist in the database",
      statusCode: StatusCodes.CONFLICT
    }
   const salt = await bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(body.password, salt)
    const user = await userRepository.create({
        firstName:body.firstName,
        lastName:body.lastName,
        email:body.email,
        password:hashedPassword,
        role:body.role
    })
    const token = await createJWT({payload:{user},options})

    return{
        data:{
         user:{
            firstName:user.firstName,
            lastName:user.lastName,
            email: user.email,
            userId: user.user_id, 
            role: user.role 
         },
         token
        },
      statusCode: StatusCodes.CREATED,
    }
 }catch(e){
    console.log("Error occurred while trying to create a user", e)
    return{
        error:e.message,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
    };
 }
};
exports.login =async(body, options)=>{
    const{email, password} =body
    if (!email || !password) return{
        error:  "Please provide your email and password",
        statusCode: StatusCodes.BAD_REQUEST
    }
    const user = await userRepository.findOne({ email })
    if (!user) return{
        error:  "Invalid Credential",
        statusCode: StatusCodes.BAD_REQUEST
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword ) return{
        error: "Invalid Credential",
        statusCode: StatusCodes.BAD_REQUEST
    }
    const token = await createJWT({payload:{user},options})
    return{
        data:{
         user:{
            firstName:user.firstName,
            lastName:user.lastName,
            email: user.email,
            userId: user.user_id, 
            role: user.role 
         },
         token
        },
      statusCode: StatusCodes.OK,
    }
    };

    exports.getUser = async (userId) => {
        try {
            const user = await userRepository.findOne({ user_id: userId });
    
            if (!user) {
                return {
                    error: "This user is not found in the database",
                    statusCode: StatusCodes.NOT_FOUND
                };
            }
    
            return {
                data: user,
                statusCode: StatusCodes.OK
            };
        } catch (e) {
            console.error("An unknown error has occurred. Please try again later.", e);
            return {
                error: e.message,
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR
            };
        }
    }
    

exports.fetchUsers = async (query) => {

    const users = await userRepository.findAll(query);
    if (!users) {
        return {
            error: "This users details is not found in the database",
            statusCode: StatusCodes.NOT_FOUND
        };
    }
    return {
        data: users,
        statusCode:StatusCodes.OK
    };
};

exports.updateUser=async(body,userId)=>{
    try{
       
       let user = await userRepository.findOne({user_id: userId })
    
       if(!user)return{
        error:"Oops! This user details could not be found on this platform",
        statusCode: StatusCodes.NOT_FOUND
       };
       const update ={
         firstName:body.firstName || user.firstName,
         lastName: body.lastName || user.lastName,
         email:body.email || user.email,
         role:body.role || user.role
         }
    await userRepository.update({user_id: userId },update);
    
    return{
     data: userId,
     statusCode: StatusCodes.ACCEPTED
    }
    
    }catch(e){
    console.log("Error occurred while trying to update user", e);
    return{
        error: e.message,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR
      };
     }
    };

exports.deleteUser =async(userId)=>{

    let user = await userRepository.findOne({user_id: userId })

    if(!user) return{
        error: "Oop! This user detail could not found non this platform, hence it cannot be deleted",
        statusCode: StatusCodes.NOT_FOUND
    };

    await userRepository.destroy({user_id: userId });
    return{
        data: userId,
        statusCode: StatusCodes.OK
        };
    };
