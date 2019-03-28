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

const blackHoleInfo = new Info({
    infoImg: "https://www.universetoday.com/wp-content/uploads/2006/10/2006-1025galaxies.jpg",
    randomFacts: "Our galaxy (The Milky Way) and our nearest neighboring galaxy (Andromeda) both have at least two supermassive black holes. Around nine billion years in the future, our galaxy and Andromeda will collide with each other. This collision will cause a merging of the two supermassive black holes.",
    nextMajorEvent: "9 billion years (estimate).",
    eventDescription: "In about 9 billion years, the Milky Way Galaxy and Andromeda will collide. There is a 12% chance that our current solar system will be ejected out of the newly formed 'Milkdromeda' galaxy. Such an event would have no adverse effect on the system and the chances of any sort of disturbance to the Sun or planets themselves may be remote. ",
    threatLevel: "Very Low"
})

const gammaRayBurstsInfo = new Info({
    infoImg: "https://sen.com/thumbs/1024x576/img/258d8bcf105b49d6ab728f3df8fbe55f.jpg",
    randomFacts: "Scientists think that a gamma ray burst may have been responsible for the Ordovician extinction that occurred 440 million years ago on earth.",
    nextMajorEvent: "Unknown.",
    eventDescription: "Although the chances are very low that a gamma ray burst will occur on earth, the long-term effects of such an event would be dangerous. Our ozone layer would delplete as much as 25-35% causing dangerously high UV levels to penetrate the earth. This would cause a chain reaction that would create nitrogen oxide which would produce photochemical smog and effect photosynthesis.",
    threatLevel: "Very Low"
})

const wormHoleInfo = new Info({
    infoImg: "https://cdn.images.express.co.uk/img/dynamic/151/590x/wormhole-milky-way-819741.jpg",
    randomFacts: "If traversable wormholes exist (wormholes that could be crossed in both directions), they could allow time travel. A proposed time-travel machine using a traversable wormhole would hypothetically work in the following way: One end of the wormhole is accelerated to some significant fraction of the speed of light, perhaps with some advanced propulsion system, and then brought back to the point of origin.",
    nextMajorEvent: "Unknown.",
    eventDescription: "According to current theories on the nature of wormholes, construction of a traversable wormhole would require the existence of a substance with negative energy, often referred to as exotic matter. More technically, the wormhole spacetime requires a distribution of energy that violates various energy conditions, such as the null energy condition along with the weak, strong, and dominant energy conditions.",
    threatLevel: "Very Low"
})

const quantumEntaglementInfo = new Info({
    infoImg: "https://static.interestingengineering.com/images/JULY/sizes/quantum-entanglement-18-qubit_resize_md.jpg",
    randomFacts: "Photon particles display quantum entanglement through nonlocality. Nonlocality describes the apparent ability of objects to instantaneously know about each other’s state, even when separated by large distances (potentially even billions of light years), almost as if the universe at large instantaneously arranges its particles in anticipation of future events. This implies that instantaneous action or transfer of information does appear to be possible.",
    nextMajorEvent: "Now.",
    eventDescription: "The measurement of one photon particle will instantaneously influence the properties of the other entangled particle. This means that the values of these properties will be highly correlated—so highly correlated, in fact, that the degree of coincidence in their values can’t really be explained without recourse to quantum mechanics. This means that information is being instantaneously passed all of the time, what the effects of this possibility is unknown currently.",
    threatLevel: "None"
})

const fermiParadoxInfo = new Info({
    infoImg: "https://i.pinimg.com/originals/01/d3/bc/01d3bc4540d243701e1df3bc44ad0256.png",
    randomFacts: "According to the Great Filter theory, there is some major hurdle that keeps advanced civilizations from reaching the stage where they could be discovered. So what about our advanced civilization? Either we are approaching our own great filter – meaning we’re barreling toward an extinction-level event – or we've already past it, meaning we are, indeed, alone in the universe.Even scarier ? It may be that sufficiently advanced civilizations don 't annihilate themselves, but others. There may be forces out there that exterminate advanced civilizations. For this reason, Stephen Hawking recommends that we don't broadcast our presence to the universe– whatever is out there, it 's better if they don't find out about us.",
    nextMajorEvent: "Unknown.",
    eventDescription: "It may be that intelligent life exists, but it's just too expensive, complicated, and difficult for them to want to bother traveling. Alternately, they may just not want to come find us – we can 't assume all intelligent life would be as curious or as nomadic as we are.  Some scientists have argued that as life forms become more advanced, they may also become more isolated, preferring virtual reality worlds to space exploration. ",
    threatLevel: "Moderate"
})

const bigBang = new UniverseEvent({
    eventImg: "https://i.kinja-img.com/gawker-media/image/upload/t_original/ah4plvlhlrcd16pxjvbz.jpg",
    eventName: "The Big Bang",
    eventCategoryThreat: "None",
    eventLocation: "Unknown",
    eventDescription: "The Big Bang Theory is the leading explanation about how the universe began. At its simplest, it says the universe as we know it started with a small singularity, then inflated over the next 13.8 billion years to the cosmos that we know today.",
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
    eventImg: "https://www.pbs.org/wgbh/nova/media/original_images/cosmic-dark-age.jpg",
    eventName: "The Dark Ages",
    eventCategoryThreat: "None",
    eventLocation: "Everywhere",
    eventDescription: "The dark ages represent our origins — when the very first stars formed and created the heavy elements we are made of today.",
    additionalInfo: [darkAgeInfo]
})

const blackHole = new UniverseEvent({
    eventImg: "https://img.purch.com/h/1000/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC82NDYvb3JpZ2luYWwvYmxhY2staG9sZS5qcGc=",
    eventName: "Black Holes",
    eventCategoryThreat: "Very Low",
    eventLocation: "Near Earth: Sagittarius A Constellation.",
    eventDescription: "A region of spacetime exhibiting such strong gravitational effects that nothing, not even particles and electromagnetic radiation such as light—can escape from inside it. ",
    additionalInfo: [blackHoleInfo]
})

const gammaRayBursts = new UniverseEvent({
    eventImg: "https://sen.com/thumbs/1024x576/img/258d8bcf105b49d6ab728f3df8fbe55f.jpg",
    eventName: "Gamma Ray Bursts",
    eventCategoryThreat: "Moderate",
    eventLocation: "Earth",
    eventDescription: "Gamma Ray Bursts are the brightest electromagnetic blasts known to occur in the Universe and can originate from the collapse of the most massive stars or from the collision of two neutron stars.",
    additionalInfo: [gammaRayBurstsInfo]
})

const wormHole = new UniverseEvent({
    eventImg: "https://roseramblesdotorg.files.wordpress.com/2018/12/5b73c7896940047961d6ab61e69637d7.jpg",
    eventName: "Worm Holes",
    eventCategoryThreat: "Low",
    eventLocation: "Unknown",
    eventDescription: "A wormhole is a theoretical passage through space-time that could create shortcuts for long journeys across the universe. Wormholes bring with them the dangers of sudden collapse, high radiation and dangerous contact with exotic matter.",
    additionalInfo: [wormHoleInfo]
})

const quantumEntaglement = new UniverseEvent({
    eventImg: "https://www.thoughtco.com/thmb/PJWuBLEpSk2Gh6NacYSjRbJIMQI=/2080x1441/filters:fill(auto,1)/GettyImages-623682717-57dd5b693df78c9ccef52b71.jpg",
    eventName: "Quantum Entanglement",
    eventCategoryThreat: "None",
    eventLocation: "Everywhere",
    eventDescription: "Quantum entanglement is a physical phenomenon that occurs when pairs or groups of particles are generated, interact, or share spatial proximity in ways such that the quantum state of each particle cannot be described independently of the state of the other(s), even when the particles are separated by a large distance.",
    additionalInfo: [quantumEntaglementInfo]
})

const fermiParadox = new UniverseEvent({
    eventImg: "https://thenypost.files.wordpress.com/2016/06/160616-fermi-paradox-solved-index.jpg?quality=90&strip=all",
    eventName: "Fermi Paradox",
    eventCategoryThreat: "Moderate",
    eventLocation: "Earth (that we know of)",
    eventDescription: "Fermi’s Paradox is the apparent contradiction between the high probability of the existence of extraterrestrial civilizations and the lack of contact with such civilizations.",
    additionalInfo: [fermiParadoxInfo]
})

UniverseEvent.remove({})
    .then(() => UniverseEvent.create([bigBang, abiogenesis, oxygenPoisoning, darkAge, blackHole, gammaRayBursts, wormHole, quantumEntaglement, fermiParadox]))
Info.remove({})
    .then(() => Info.create([bigBangInfo, abiogenesisInfo, oxygenPoisoningInfo, darkAgeInfo, blackHoleInfo, gammaRayBurstsInfo, wormHoleInfo, quantumEntaglementInfo, fermiParadoxInfo]))
    .then(() => {
        console.log("seeded successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log(err, "error!"));