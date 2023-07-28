"use strict";
const BaseRepository = require("./BaseRepository");
const userModel = require("../models/User");

class UserRepository extends BaseRepository{
    
    constructor() {
    super(userModel);
    }
   
}


module.exports = (new UserRepository());
