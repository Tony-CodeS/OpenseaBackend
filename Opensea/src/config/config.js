const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const ConnectionString = process.env.CONNECTION

const databaseConnection = async()=>{
    await mongoose.connect(ConnectionString)
    console.log('connected to Email Database')
}

module.exports = databaseConnection