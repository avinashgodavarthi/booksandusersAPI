var user = require("../model/user")

var bcrypt = require("bcrypt")

var jwt = require("jsonwebtoken")



// register user controller//

var registeruser = async(req,res)=>{
    try{
        var {username,email,password,role} = req.body
        var existuser = await user.findOne({$or :[{username,email}]})

        if(existuser){
           return res.status(200).json({message: "user already existed"})
        }

        var salt = await bcrypt.genSalt(5)
        var hashpassword = await bcrypt.hash(password,salt)
        



// to creating the user or register controller//

        var newuser = await user.create({
            username,
            email,
            password: hashpassword,
            role
        })
        res.status(201).json({message:"user created successfully",a:newuser})

        }
        catch(error){
            console.log("error",error);
            res.status(500).json({message : "user not found"})
            
        }
    }


// login controller//

var loginuser = async(req,res)=>{
    try{
        var {username,password}= req.body
        var checkuser = await user.findOne({username})
        if(!checkuser){
         return res.status(200).json({message:"Invalid username"})
        }

        var comparepassword = await bcrypt.compare(password,checkuser.password)
        if(!comparepassword){
            return res.status(200).json({message:"Invalid password"})
        }

        var token = jwt.sign({
            userid : checkuser._id,
            username : checkuser.username,
            role : checkuser.role
            
        },process.env.JWT_TOKEN,{expiresIn : "1d"})

        res.status(200).json({message:"Login successfull", a:token})
    }
    catch(error){
        console.log("error",error);
        
    }
}


module.exports = {
    registeruser,loginuser
}