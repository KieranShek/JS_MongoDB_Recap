const createRouter = require('./helpers/create_router')
const cors = require('cors')
const express = require('express');
const MongoClient = require('mongodb').MongoClient

const app = express();
app.use(express.json())

app.use(cors())

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
.then( (client) => {
    const db = client.db('hotel_bookings')
    const bookingsCollection = db.collection('bookings')
    const bookingsRouter = createRouter(bookingsCollection)
    app.use('/api/bookings', bookingsRouter)

}).catch(console.error())

app.listen(5000, function () {
    console.log("app running on 5000");
})
