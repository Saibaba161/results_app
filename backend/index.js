require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes/routes')
const userRoutes = require('./routes/userRoutes')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/data', routes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })