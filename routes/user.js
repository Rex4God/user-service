"use strict";
const express = require("express");
const router =express.Router();
const controller = require("../app/controllers/UserController")

const {
    authenticateUser,
    authorizeRoles,
  } = require('../app/middleware/authentication');



router.get("/users", ([authenticateUser,authorizeRoles("admin")]),controller.fetchUsers);


router.post("/", controller.createUser);


router.post("/login", controller.login)


router.get("/:userId", controller.getUser);


router.put("/:userId",authenticateUser, controller.updateUser);

router.delete("/:userId", ([authenticateUser,authorizeRoles("admin")]), controller.deleteUser)





module.exports =router