const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Info = new Schema({
    infoImg: String,
    randomFacts: String,
    nextMajorEvent: String,
    eventDescription: String,
    threatLevel: String
})

const Universe = new Schema({
    eventImg: String,
    eventName: String,
    eventCategoryThreat: String,
    eventLocation: String,
    eventDescription: String,
    additionalInfo: [Info]
})

module.exports = {
    Universe: mongoose.model('Universe', Universe),
    Info: mongoose.model('Info', Info)
}