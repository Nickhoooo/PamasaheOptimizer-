const express = require('express')
const router = express.Router()
const Route = require("../models/Route")
const findRoute = require("../utils/bfs")

router.get('/', async (req, res) => {
    const { from, to } = req.query

    if (!from || !to){
        return res.status(400).json({message: 'From and To are required'})
    }

    try {
        const allRoutes = await Route.find()

        const result = findRoute(allRoutes, from.toLowerCase(), to.toLowerCase())

        if (!result.found){
            return res.status(404).json({ message: "No Routes Found"})
        }
        res.json(result)
    } catch (err) {
    res.status(500).json({ message: err.message })
    }
})

module.exports = router