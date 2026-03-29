const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const routesRouter = require('./routes/routes')
app.use('/api/routes', routesRouter)

// Test if running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Pamasahe backend is running!' })
})

mongoose.connect('mongodb://localhost:27017/pamasahe')
  .then(() => {
    console.log('✅ MongoDB connected!')
    app.listen(5000, () => console.log('✅ Server on http://localhost:5000'))
  })
  .catch(err => console.log('❌ DB Error:', err))