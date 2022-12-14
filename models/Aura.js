const mongoose = require('mongoose')
const moment = require('moment')

const AuraSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: false
    },
    aura: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Aura', AuraSchema)