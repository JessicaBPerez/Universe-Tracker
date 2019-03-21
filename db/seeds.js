require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { UniverseEvent } = require('../models/Universe.js')
const { Info } = require('../models/Universe.js')

const bigBangInfo = new Info({
    infoImg: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ah4plvlhlrcd16pxjvbz.jpg",
    randomFacts: "Big Bang random fact here.",
    nextMajorEvent: "17 quintillion years",
    eventDescription: "Universe dies.",
    threatLevel: "Extinction"
})

const bigBang = new UniverseEvent({
    eventImg: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ah4plvlhlrcd16pxjvbz.jpg",
    eventName: "The Big Bang",
    eventCategoryThreat: "None",
    eventLocation: "Unknown",
    eventDescription: "The creation of the known Universe.",
    additionalInfo: [bigBangInfo]
})




UniverseEvent.remove({})
    .then(() => UniverseEvent.create([bigBang]))
Info.remove({})
    .then(() => Info.create([bigBangInfo]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));