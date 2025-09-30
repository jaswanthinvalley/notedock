const mongoose = require('mongoose')

const Db = () => {

    mongoose.connect(process.env.MONGODB_URL)
    .then((result) => console.log("mongodb connect sucessful") )
    .catch((err) => console.log("error in connecting the database : ",err))
}



module.exports = {
    Db
}