const express = require('express');

const app = express();
const port = 3000;

require('dotenv').config();
require('./configs/db.js')();

app.use(express.json());

app.use(express.static(__dirname + '/public/'));

app.use('/api/cars', require('./routes/cars'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});