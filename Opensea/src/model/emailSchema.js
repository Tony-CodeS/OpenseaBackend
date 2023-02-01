const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required: true
        }
    },
    {
        timestamps:true
    }
)

const EmailModel = mongoose.model('email', emailSchema)

module.exports = EmailModel