const express = require('express')
const router = express.Router()

const pdfController = require('../controller/pdf')

router.post('/pdf', pdfController.pdf)

module.exports = router