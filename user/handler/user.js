const express = require("express");
const router = express.Router();
const UserHelper = require("../helper/user");

router.post("/create", UserHelper.checkUser, UserHelper.createUser); 

module.exports = router;
