const express = require('express')
const router = express.Router()

const universeEventController = require('../controllers/universeEventController.js')

//Displays all of the Universe Events
router.get('/', universeEventController.index)

module.exports = router