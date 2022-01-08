const express = require('express');
const app = express();
require('./database');


//ROUTES USED
const indexApiRoute = require('../routes/index.routes');

app.use('/api', indexApiRoute);


module.exports = app;