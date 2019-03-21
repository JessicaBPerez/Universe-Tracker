const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const Comment = new Schema({
    infoImg: String,
    randomFacts: String,
    nextMajorEvent: String,
    eventDescription: String,
    threatLevel: String,
})

const Info = new Schema({
    infoImg: String,
    randomFacts: String,
    nextMajorEvent: String,
    eventDescription: String,
    threatLevel: String,
    info: Array
})

const UniverseEvent = new Schema({
    eventImg: String,
    eventName: String,
    eventCategoryThreat: String,
    eventLocation: String,
    eventDescription: String,
    additionalInfo: [Info]
})

module.exports = {
    UniverseEvent: mongoose.model('UniverseEvent', UniverseEvent),
    Info: mongoose.model('Info', Info),
    Comment: mongoose.model('Comment', Comment)
}