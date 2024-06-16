const express = require('express')
const router = express.Router()

const {getResult} = require('../controllers/controller')

router.get(':/id', getResult)

module.exports = router