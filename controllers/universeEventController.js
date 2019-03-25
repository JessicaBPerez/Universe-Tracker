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
    //Creates a New Universe Fact
    create: (req, res) => {
        UniverseEvent.create(req.body).then(event => {
            res.json(event)
        })
    },
    update: async(req, res) => {
        // try {
        //     const eventId = req.params.id
        //     console.log(eventId)
        //     const updatedEvent = req.body
        //     const savedEvent = await UniverseEvent.findByIdAndUpdate(eventId, updatedEvent)
        //     res.json(savedEvent)
        // } catch (err) {
        //     console.log(err)
        //     res.status(500).json(err)
        // }
        UniverseEvent.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(event => {
            res.json(event)
        })
    },
    delete: (req, res) => {
        UniverseEvent.findByIdAndDelete(req.params.id).then(event => {
            res.json(event)
        })
    }
}

module.exports = universeEventController