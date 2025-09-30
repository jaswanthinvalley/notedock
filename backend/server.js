const express = require('express')
const app  = express()
const dotenv = require('dotenv')
dotenv.config()
const nodemon = require('nodemon')
const { Db } = require('./db/Db')
const UserRouter = require('./Routes/UserRoutes')

const port = process.env.PORT || 3000
app.use(express.json());

app.listen(port,(data) => console.log(`the server is running in the port ${port}`))

Db()

app.use("/api/v1",UserRouter)
app.get("/",(req,res) => res.json({
    messsage : "welcome you are in the root page",
    
}))

app.post("/signup",(req,res) =>{
    const{email,password} = req.body
    
})