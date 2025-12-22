var express = require("express")

var {registeruser, loginuser} = require("../controllers/user-controller")

var router = express.Router()

//for register//

router.post("/register",registeruser) 

// for login//

router.post("/login",loginuser)


module.exports = router
