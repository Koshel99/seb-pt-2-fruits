require('dotenv').config();
require('./config/database');

const express = require('express');
const morgan = require('morgan');

const app = express();

//models
const Fruit = require("./models/fruit.js");

//middleware
app.use(morgan('dev'));

//routes
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
