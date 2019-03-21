const { UniverseEvent, Info, Comment } = require('../models/Universe.js')

const infoController = {
    show: (req, res) => {
        let { id, infoId } = req.params
        console.log(id)
        console.log(infoId)
        Info.findById(infoId).then(info => {
            res.json(info)
        })
    },
    create: (req, res) => {
        Info.findById(req.params.infoId).then(info => {
            const newInfo = Comment.create(req.body)
                .then((newInfo) => {
                    info.info.push(newInfo)
                    console.log(newInfo)
                    info.save()
                    res.json(newInfo)
                })
        })
    },
}

module.exports = infoController