const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

const config = require('./config/index.js');


const PORT = process.env.PORT || 3002;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(config);



app.listen(PORT, () => {
    console.log(`App Running in PORT: ${PORT}`);
})