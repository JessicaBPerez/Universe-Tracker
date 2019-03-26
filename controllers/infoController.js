const { UniverseEvent, Info, Comment } = require('../models/Universe.js')

const infoController = {
    index: (req, res) => {
        UniverseEvent.findById(req.params.id).then((event) => {
            event.additionalInfo
            res.json(event.additionalInfo)
        }).catch((err) => {
            console.log("Go back!")
        })
    },
    show: (req, res) => {
        console.log('HEY LOOK HERE THIS IS WHERE STUFF IS')
        const entireUrl = '/' + req.params.id + '/info/' + req.params.infoId
        console.log(entireUrl)
        let { id, infoId } = req.params
        console.log(id)
        console.log(infoId)
        Info.findById(infoId).then(info => {
            res.json(info)
        })
    },
    create: (req, res) => {
        // Info.findById(req.params.infoId).then(info => {
        //     const newInfo = Info.create(req.body)
        //         .then((newInfo) => {
        //             info.info.push(newInfo)
        //             console.log(newInfo)
        //             info.save()
        //             res.json(newInfo)
        //         })
        // })
        UniverseEvent.findById(req.params.id).then((uEvent) => {
            Info.create(req.body)
                .then((info) => {
                    uEvent.additionalInfo.push(info)
                    uEvent.save()
                    res.send(uEvent)
                })

        })

        // Info.create(req.body).then(event => {
        //     res.json(event)
        // })
    },
    delete: (req, res) => {
        Info.findByIdAndDelete(req.params.id).then(event => {
            res.json(event)
        })
    },
}

module.exports = infoController