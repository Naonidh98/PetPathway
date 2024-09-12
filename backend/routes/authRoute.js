const express = require("express");
const router = express.Router();

//import controllers
const {sendOTP,signup,login,updatePassword} =  require("../controllers/Auth")

//send otp
router.post("/otp",sendOTP);

//sign up
router.post("/signup",signup);

//login 
router.post("/login",login);

//update password
//todo : auth middleware
//router.post("/password/update",updatePassword)

module.exports = router;
