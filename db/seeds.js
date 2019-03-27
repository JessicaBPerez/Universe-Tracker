require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const { UniverseEvent } = require('../models/Universe.js')
const { Info } = require('../models/Universe.js')

const bigBangInfo = new Info({
    infoImg: "https://r.hswstatic.com/w_907/gif/big-bang-sound-1jpg.jpg",
    randomFacts: "The Big Bang theory explains where all the hydrogen and helium in the universe came from. The best evidence for the Big Bang is in the form of microwaves. The light released from this microwave transition, known as the cosmic microwave background (CMB), still exists. It was first observed in the 1960s by Arno Penzias and Robert Wilson.",
    nextMajorEvent: "10^{10^120 years",
    eventDescription: "Heat Death, Big Rip Or Cosmic Consciousness? After the Universe reaches its final energy state in 10^10^120 years,  quantum tunnelling in any isolated patch of the Universe vacuum could generate, via inflation, new Big Bangs that would give birth to new universes.",
    threatLevel: "Extinction (for our current Universe as we know it)"
})

const abiogenesisInfo = new Info({
    infoImg: "https://wp-assets.futurism.com/2014/12/Origin-of-Life.jpg",
    randomFacts: "The earliest known life forms on Earth were unicellular organisms that were found in hydrothermal vent precipitates and lived around 4.28 billion years ago.",
    nextMajorEvent: "Now: Organisms continue to consistently evolve depending on external stimuli and circumstances. For instance, the Tibetan population that lives in the Himalayan mountains have evolved to produce more hemoglobin protein that is responsible for transporting oxygen in the bloodstream. This evolutionary trait allows the Tibetan people to live in high-altitude, low-oxygen environments.",
    eventDescription: "We continue to biologically evolve. With our increasing reliance on technology and advances in STEM, we may one day create a new species of homonid that is part homo-sapien, part artificial intelligence.",
    threatLevel: "Unknown."
})

const oxygenPoisoningInfo = new Info({
    infoImg: "https://i.dailymail.co.uk/i/pix/2015/10/07/13/2D2AA17300000578-3263454-image-a-28_1444220380780.jpg",
    randomFacts: "The oxygen byproduct caused by blue-green bacteria due to photosynthesis began to collect in the atmosphere. Oxygen attacked many of life' s molecules, when oxygen fused with these molecules, it changing their molecular structure and produced carbon dioxide and heat as a byproduct. The new oxygen slowly burnt the proteins and chromosomes inside the bacteria, this caused the bateria to die en masse.",
    nextMajorEvent: "Next 50 years (if no action is taken)",
    eventDescription: "Our current carbon dioxide emissions are too great for photosynthesis producting plants and organisms to handle. Effects directly significant to humans are predicted to include the threat to food security from decreasing crop yields, and the abandonment of populated areas due to rising sea levels. Environmental impacts appear likely to include the extinction or relocation of ecosystems as they adapt to climate change, with coral reefs, mountain ecosystems, and Arctic ecosystems most immediately threatened. Because the climate system has a large inertia and greenhouse gases will remain in the atmosphere for a long time, climatic changes and their effects will continue to become more pronounced for many centuries even if further increases to greenhouse gases stop.",
    threatLevel: "Very High"
})

const darkAgeInfo = new Info({
    infoImg: "https://www.universetoday.com/wp-content/uploads/2006/10/2006-1025galaxies.jpg",
    randomFacts: "During these Dark Ages, the Universe was transparent. Clouds of hydrogen collapsed very slowly to form stars and galaxies and as a result, there were no new sources of light. The only photons (electromagnetic radiation, or 'light') in the universe were those released during decoupling (visible today as the cosmic microwave background).",
    nextMajorEvent: "9.8 Billion years.",
    eventDescription: "From about 9.8 billion years of cosmic time, the slowing expansion of space gradually begins to accelerate under the influence of dark energy, which may be a scalar field throughout our universe. The dark energy, in conjuction with dark matter, all of the celestial bodies and objects will be carried away from each other by gravitational forces. The Universe will once again darken, and eventually cease to exist. ",
    threatLevel: "Very Low"
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
    eventImg: "https://matrixdisclosure-abe3.kxcdn.com/wp-content/uploads/2017/10/origins-of-life.jpg",
    eventName: "Abiogenesis",
    eventCategoryThreat: "None",
    eventLocation: "On earth: 4.28 billion years ago.",
    eventDescription: "Colloquially known as 'The Origin Of Life.' Abiogenesis is the natural process by which organic life was ceated from inorganic matter.",
    additionalInfo: [abiogenesisInfo]
})

const oxygenPoisoning = new UniverseEvent({
    eventImg: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/anotherlinkb.jpg",
    eventName: "Great Oxygen Poisoning",
    eventCategoryThreat: "Very High",
    eventLocation: "Earth",
    eventDescription: "Once photosynthesis by blue-greens began to release oxygen, iron minerals in the rocks and oceans of the Earth began to combine with the oxygen and turn brown -- the world began to rust. ",
    additionalInfo: [oxygenPoisoningInfo]
})

const darkAge = new UniverseEvent({
    eventImg: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Big_Crunch.gif",
    eventName: "The Dark Ages",
    eventCategoryThreat: "None",
    eventLocation: "Everywhere",
    eventDescription: "The dark ages represent our origins — when the very first stars formed and created the heavy elements we are made of today.",
    additionalInfo: [darkAgeInfo]
})


UniverseEvent.remove({})
    .then(() => UniverseEvent.create([bigBang, abiogenesis, oxygenPoisoning, darkAge]))
Info.remove({})
    .then(() => Info.create([bigBangInfo, abiogenesisInfo, oxygenPoisoningInfo, darkAgeInfo]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));