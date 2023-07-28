"use strict";
const Joi = require("joi");
const{validate} = require("../utils/helpers")
const{ROLE}= require("../utils/roles")



exports.createUser =async(body)=>{

 let schema ={
    firstName:Joi.string().required(),
    lastName: Joi.string().required(),
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net','io','org','ng','edu'] } }).required(),
    password: Joi.string().required(),
    role:Joi.string().valid(ROLE.ADMIN, ROLE.USER).default(ROLE.USER).required() 
 }
 return validate(schema, body)
}