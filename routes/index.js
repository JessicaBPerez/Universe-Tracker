const express = require('express')
const router = express.Router()

const universeEventController = require('../controllers/universeEventController.js')
const infoController = require('../controllers/infoController')

//Displays all of the Universe Events
router.get('/', universeEventController.index)

//Displays the individual ID
router.get('/:id', universeEventController.show)

//Creates a New Universe Event Card
router.post('/', universeEventController.create)

//Updates a Single Universe Event
router.put('/:id', universeEventController.update)

router.delete('/:id', universeEventController.delete)

//Info Events
//old one

// router.get('/:id/info/:infoId', infoController.show)
router.get('/:id', infoController.show)

router.post('/:id/info/:infoId', infoController.create)

module.exports = router