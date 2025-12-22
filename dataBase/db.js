var mongoose = require("mongoose")


var connectToDatabase = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to the data base");

    }catch(error){
        console.log("error",error);
    }
}

module.exports = connectToDatabase



