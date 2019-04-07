const path = require('path');
const mongoose = require('mongoose');

require('dotenv').config({
    path: path.join(__dirname, 'config', 'app.env')
});

const options = { useNewUrlParser: true };
const connectionString = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/calendar`;

module.exports = {
    connect() {
        mongoose.connect(connectionString, options);
    }
};
