const express = require("express")
const { default: mongoose } = require("mongoose")
const { UserModel } = require("../model/UserModel")
const UserRouter = express.Router()

UserRouter.route('/signup').get((req,res) => {
    res.json({
        message : "welcome to the signin page"
    })

})

UserRouter.route('/login').get((req,res) => {
    res.json({
        message : "welcome to the login page"
    })
})

module.exports = UserRouter;