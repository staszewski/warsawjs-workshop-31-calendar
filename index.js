const express = require('express');
const path = require('path');

const app = express();
// load cfg
require('dotenv').config({
    path: path.join(__dirname, 'config', 'app.env')
});

app.listen(process.env.PORT, () => {
  console.log(`started on port ${process.env.PORT}`)
})
