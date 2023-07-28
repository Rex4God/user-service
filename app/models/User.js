const { DataTypes, Sequelize, DATE} = require("sequelize");
const sequelize = require("../database/db");
const{ROLE} = require("../utils/roles")


const  User = sequelize.define("users",{

 user_id:{
    type: Sequelize.UUID,
   defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
    unique: true

    },
 firstName:{
        type:Sequelize.STRING,
        allowNull: false,
        min:3,
        max: 30
    },
 lastName:{
    type:Sequelize.STRING,
    min:3,
    max: 30,
    allowNull: false
    },
 email:{
    type:Sequelize.STRING,
    allowNull: false,
    unique:true,
    isEmail: true,
      },
 password:{
    type:Sequelize.STRING,
    min: 6,
    max:50
    },
 role:{  
    type:Sequelize.STRING,
    values:[ROLE.USER, ROLE.ADMIN],
    defaultValue: ROLE.USER
 },
    
})


module.exports =User