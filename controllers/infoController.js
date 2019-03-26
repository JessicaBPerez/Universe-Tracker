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
        // console.log('HEY LOOK HERE THIS IS WHERE STUFF IS')
        // const entireUrl = '/' + req.params.id + '/info/' + req.params.infoId
        // console.log(entireUrl)
        let { id, infoId } = req.params
            // console.log(id)
        console.log('infoId: ', infoId)
            // UniverseEvent.findById(id).then((uEvent) => {
            //     Info.findById(infoId).then((bana) => {
            //         res.json(bana)
            //     })
            // })
        Info.findById(infoId).then((bana) => {
            res.json(bana)
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
        UniverseEvent.findById(req.params.id).then((findevent) => {
                const newInfo = findevent.additionalInfo.filter(info => info._id.toString() !== req.params.infoId)
                findevent.additionalInfo = newInfo
                findevent.save().then(() => {
                    Info.findByIdAndDelete(req.params.infoId).then(deletedEvent => {
                        res.json(deletedEvent)
                    })
                })
            })
            // Info.findByIdAndDelete(req.params.id).then(event => {
            //     res.json(event)
            // })
    },
}

module.exports = infoController