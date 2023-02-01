const express = require('express')
const router = require('./src/router/emailRouter')
const databaseConnection = require('./src/config/config')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.use(express.json())


app.get('/',(req, res)=>{
res.send('Home')
})
app.use('/', router)

const PORT = process.env.PORT

databaseConnection()
app.listen(PORT, ()=>{
    console.log('Server running')
})