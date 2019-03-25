require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { UniverseEvent } = require('../models/Universe.js')
const { Info } = require('../models/Universe.js')

const bigBangInfo = new Info({
    infoImg: "https://r.hswstatic.com/w_907/gif/big-bang-sound-1jpg.jpg",
    randomFacts: "Big Bang random fact here.",
    nextMajorEvent: "17 quintillion years",
    eventDescription: "Universe dies.",
    threatLevel: "Extinction"
})

const abiogenesisInfo = new Info({
    infoImg: "https://wp-assets.futurism.com/2014/12/Origin-of-Life.jpg",
    randomFacts: "The earliest known life forms on Earth were unicellular organisms that were found in hydrothermal vent precipitates and lived around 4.28 billion years ago.",
    nextMajorEvent: "Now: Organisms continue to consistently evolve depending on external stimuli and circumstances. For instance, the Tibetan population that lives in the Himalayan mountains have evolved to produce more hemoglobin protein that is responsible for transporting oxygen in the bloodstream. This evolutionary trait allows the Tibetan people to live in high-altitude, low-oxygen environments.",
    eventDescription: "We continue to biologically evolve. With our increasing reliance on technology and advances in STEM, we may one day create a new species of homonid that is part homo-sapien, part artificial intelligence.",
    threatLevel: "Unknown."
})

const bigBang = new UniverseEvent({
    eventImg: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ah4plvlhlrcd16pxjvbz.jpg",
    eventName: "The Big Bang",
    eventCategoryThreat: "None",
    eventLocation: "Unknown",
    eventDescription: "The creation of the known Universe.",
    additionalInfo: [bigBangInfo]
})

const abiogenesis = new UniverseEvent({
    eventImg: "https://wp-assets.futurism.com/2014/12/Origin-of-Life.jpg",
    eventName: "Abiogenesis",
    eventCategoryThreat: "None",
    eventLocation: "On earth: 4.28 billion years ago.",
    eventDescription: "Organic life was ceated from inorganic matter.",
    additionalInfo: [abiogenesisInfo]
})


UniverseEvent.remove({})
    .then(() => UniverseEvent.create([bigBang, abiogenesis]))
Info.remove({})
    .then(() => Info.create([bigBangInfo, abiogenesisInfo]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));