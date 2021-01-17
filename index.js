const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://localhost/taraminego');
mongoose.Promise = global.Promise;

const emailcron = require('./routes/emailcron');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/email', emailcron); 

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
