const express = require('express')
const createEmail = require('../controller/email')

const router = express.Router()

router.post('/email', createEmail)

module.exports = router