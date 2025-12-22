var book = require("../model/books")

// get all books//

var getAllBooks = async(req,res)=>{
    var allBooks = await book.find()
    res.status(200).json({allBooks})
}


// post a new book//

var createNewBook = async(req,res)=>{
    var newBook = await book.create({
    title : req.body.title,
    name : req.body.name,
    author : req.body.author,
    price : req.body.price
    })
    console.log(newBook);
    res.status(201).json({message : "created a new book"})
}

// get singlebook by id//

var getSingleBook = async(req,res)=>{
    var Bookid = req.params.id 
    var singleBook = await book.findById(Bookid)
    res.status(200).json({singleBook})
}

// put or update the books// 

var updatedata = async(req,res)=>{
var updatebook = await book.findByIdAndUpdate(req.params.id,{
    title : req.body.title,
    name : req.body.name,
    author : req.body.author,
    price : req.body.price
})
res.status(200).json({updatebook,message :"bookupdated" })

}


// delete the books//

var deletedata= async(req,res)=>{
    var deletebook = await book.findByIdAndDelete(req.params.id)
    res.status(200).json({deletebook,message : "deleted successfully"})
}


module.exports = {
    getAllBooks,createNewBook,getSingleBook,updatedata,deletedata
}
