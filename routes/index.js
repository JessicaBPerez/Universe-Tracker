const express = require('express')
const router = express.Router()

const universeEventController = require('../controllers/universeEventController.js')

//Displays all of the Universe Events
router.get('/', universeEventController.index)

//Displays the individual ID
router.get('/:id', universeEventController.show)

//Creates a New Universe Event Card
router.post('/', universeEventController.create)

module.exports = router