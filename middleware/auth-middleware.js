var jwt = require("jsonwebtoken")

var authmiddleware = (req,res,next)=>{
    var authHeaders = req.headers["authorization"]
    var token = authHeaders && authHeaders.split(" ")[1]

    console.log(token); // for dispalying the token
    

    if(!token){
        return res.status(401).json({message:"cannot access the token "})
    }

    try{
        var decodedToken = jwt.verify(token,process.env.JWT_TOKEN)
        console.log(decodedToken);
        next()
        

    } 
    catch(error){
        res.status(200).json({message: "no account found"})
        console.log("error",error);
        
    }
}

module.exports = authmiddleware
