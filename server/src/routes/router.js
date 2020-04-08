const express = require("express");
const apiRoutes = express.Router();
const users = require("./users/index");

//users
apiRoutes.get("/users", users.getAllUsers).get("/user/:id", users.getById);

module.exports = apiRoutes;
