const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default : Date.now
    }
})

module.exports = mongoose.model("ResponseSchema", ResponseSchema)