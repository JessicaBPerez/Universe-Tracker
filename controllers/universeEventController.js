const { UniverseEvent } = require('../models/Universe.js')

const universeEventController = {
    index: (req, res) => {
        UniverseEvent.find().then((events) => {
            res.json(events)
        }).catch((err) => {
            console.log("You messed up!", err)
        })
    },
    show: (req, res) => {
        UniverseEvent.findById(req.params.id).then(event => {
            res.json(event)
        })
    },
}

module.exports = universeEventController