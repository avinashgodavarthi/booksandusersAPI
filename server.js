require("dotenv").config()

var cors = require("cors")

var express = require("express")

var connectToDatabase = require("./dataBase/db")

var bookRoutes = require("./Routes/book-routes") 

var userRoutes = require("./Routes/user-routes")    // for login or register user//

var app = express()

app.use(cors())

app.use(express.json())

app.use("/books/api",bookRoutes)

app.use("/users/api",userRoutes)

var PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log("The server is running");
})

// connect to the data base

connectToDatabase()

