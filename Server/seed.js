require('dotenv').config()
const mongoose = require('mongoose');
const Stop = require('./models/Stop');
const Route = require('./models/Route');
const stops = require('./data/stops.json');
const routes = require('./data/routes.json');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('connecting: seeding data...')

        await Stop.deleteMany()
        await Route.deleteMany()

        await Stop.insertMany(stops)
        await Route.insertMany(routes)

        console.log('Stops seeded: ', stops.length)
        console.log('Routes seeded: ', routes.length)
        process.exit()
    })
    .catch(err => {
        console.log('Error: ', err.message)
        process.exit(1)
    })