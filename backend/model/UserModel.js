const mongoose = require('mongoose')


const UserSchema = new Schema.create({
    name : String,
    email : String,
    password : String

})

const AdminSchema = new Schema.create({
    name : String,
    email : String,
    password : String
})

const UserModel = mongoose.Model("user",UserSchema)
const AdminModel = mongoose.Model("admin",AdminSchema)

module.exports = {
    UserModel,
    AdminModel
}