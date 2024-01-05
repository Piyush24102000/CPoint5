require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { addItems, getItems } = require('./controllers/inventoryController')
const cors = require('cors')

/* Middlewares */
app.use(express.json())
app.use(cors())

/* Routes */
app.get('/api/getItems', getItems)
app.post('/api/addItems', addItems)

/* Connection */
mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(process.env.PORT, () => { console.log("server and database connected on port 5000") })
}).catch((e) => { console.log(e) })

