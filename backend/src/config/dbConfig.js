const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('connected');
})

connection.on('error', (err) => { console.log(err); });

module.exports = connection;
