var express = require("express")
var {getAllBooks,createNewBook,getSingleBook, updatedata, deletedata}= require("../controllers/book-controller")

var router = express.Router()

router.get("/allBooks",getAllBooks)

router.get("/singleBook/:id",getSingleBook)

router.post("/add",createNewBook)

router.put("/update/:id",updatedata)

router.delete("/delete/:id",deletedata)



module.exports = router