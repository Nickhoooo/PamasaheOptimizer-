const mongoose = require('mongoose')

const stopSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    city: {type: String, required: true}
})

module.exports = mongoose.model('Stop', stopSchema)