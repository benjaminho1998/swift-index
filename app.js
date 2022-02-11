const express = require('express');
const app = express();
const port = process.env.PORT;
const { Sequelize } = require('sequelize');
const db = require("./models");
const cors = require('cors');

db.sequelize.sync();

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello there you');
});

app.listen(port, () => {
    console.log('App is listening');
});