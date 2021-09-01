var express = require('express')
var router = express.Router()
const { body, validationResult } = require('express-validator')
const {signout, signup, signin, isSignedin} = require("../controllers/auth")

router.post("/signup",[
    body("name","Enter a valid name").isLength({min:3}),
    body("email","Email is required").isEmail(),
    body("password","Password should contain atleast 6 characters ").isLength({min:6})
],signup)

router.post("/signin",[
    body("email","Email is required").isEmail(),
    body("password","Password is required ").isLength({min:1})
],signin)


router.get("/testroute",isSignedin,(req,res)=>{
    res.json(req.auth);
})
  
router.get("/signout",signout)


module.exports = router;