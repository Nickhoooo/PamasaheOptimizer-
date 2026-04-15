const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: function(origin, callback) {
        const allowedOrigins = [
            "http://localhost:5173",
            "https://pamasahe-optimizer.vercel.app"
        ];
        
        if (!origin || allowedOrigins.includes(origin) || origin.endsWith(".vercel.app")) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}))

app.use(express.json())

const routesRouter = require('./routes/routes')
app.use('/api/routes', routesRouter)

const authRouter = require('./routes/authRoutes');
app.use('/api/auth', authRouter)

const historyRouter = require("./routes/history")
app.use("/api/history", historyRouter)

const savedRouter = require("./routes/saved")
app.use("/api/saved", savedRouter) 

// Test if running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Pamasahe backend is running!' })
})

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected!')
    const PORT = process.env.PORT || 5000
    app.listen(PORT, () => console.log(`✅ Server on port ${PORT}`))
  })
  .catch(err => console.log('❌ DB Error:', err))