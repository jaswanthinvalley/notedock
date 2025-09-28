const mongoose = require('mongoose')


const UserSchema = new Schema.create({
    email : String,
    password : String

})

const UserModel = mongoose.Model("UserModel",UserSchema)


module.exports = {
    UserModel
}