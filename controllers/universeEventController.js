const { UniverseEvent } = require('../models/Universe.js')

const universeEventController = {
    index: (req, res) => {
        UniverseEvent.find().then((events) => {
            res.json(events)
        }).catch((err) => {
            console.log("You messed up!", err)
        })
    }
}

module.exports = universeEventController