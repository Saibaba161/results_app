const express = require('express')
const router = express.Router()

//controllers
const loginUser = require('../controllers/userController')

//routes
router.post('/login', loginUser)

module.exports = router