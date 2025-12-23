var express = require("express")

var authmiddleware = require("../middleware/auth-middleware")


var router = express.Router()

router.get("/home",authmiddleware,async(req,res)=>{
    res.status(200).json({message:"Welcome to Home-Page"})
})
module.exports= router
