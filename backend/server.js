const express = require('express')
const app  = express()
const nodemon = require('nodemon')

const port = process.env.PORT || 3000

app.listen(port,(data) => console.log(`the server is running in the port ${port}`))
app.get("/",(req,res) => res.json({
    messsage : "welcome you are in the root page"
}))

app.post("/signup",(req,res) =>{
    const{email,password} = req.body
    
})