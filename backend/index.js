require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')

//express app
const app = express()

 const corsOptions = {
   origin: '*',//(https://your-client-app.com)
   optionsSuccessStatus: 200,
   methods : ["GET","POST","PUT","DELETE"],
  'Access-Control-Allow-Origin': '*'
 };

 app.use(cors(corsOptions));
//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get("/", (req, res) => {
  res.send("Hello world");
});

//routes
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
