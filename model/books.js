var mongoose = require("mongoose")


var bookSchema = new mongoose.Schema({
    title : String,
    name : String,
    author : String,
    price : Number

})

module.exports = mongoose.model("books",bookSchema)


