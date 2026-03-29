const mongoose = require('mongoose')

const routeSchema = new mongoose.Schema({
    from: {type: String, required: true},
    to: {type: String, required: true},
    transport: {type: String, required: true},
    fare: {type: Number, required: true},
    duration: {type: Number, requirde: true},
    code: { type: String }
})

module.exports = mongoose.model('Route', routeSchema)