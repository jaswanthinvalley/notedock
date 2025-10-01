const express = require("express")
const { UserModel } = require("../model/UserModel")
const UserRouter = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

UserRouter.post('/signup',async (req,res) => {
    const {email,password} = req.body

    const hashedpassword = await bcrypt.hash(password,10)

    const user = await UserModel.create({
        email,
        hashedpassword
    })

    const jwtuser = {
        email : email,
        password : hashedpassword
    }
    const generatetoken = jwt.sign(jwtuser,"sampel")
    res.cookie('token',generatetoken)

    res.json({
        message : "user creation sucess",
        user : user,
        password : hashedpassword,
        generatetoken : generatetoken

    })

})


module.exports = UserRouter;
