const EmailModel = require('../model/emailSchema')

const createEmail = async (req, res)=>{
    const email = req.body
    //const smallEmail = email.toLowerCase()
    try{
    const Email = await EmailModel.findOne(email)
    if(Email) return res.status(400).json({
        success:false,
        message:"Email already Subscribed"
    })

    const newEmail = await EmailModel.create(email)
   await newEmail.save()
    res.status(200).json({
        success:true,
        message:"Thank You For Subscribing",
        data:newEmail
    })
    }catch(err){
        console.log(err)
        res.status(400).send({
        success:false,
        message:"Error Occured",
        
           
        })
    }
}

module.exports = createEmail