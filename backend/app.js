const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const billsRoutes = require('./routes/bills')
mongoose.connect('mongodb://localhost:27017/electricity-bill-database')
    .then(() => {
        console.log('connected to database!')
    }, () => {
        console.log('error occured!');
    });
const Bill = require('./models/BillData');

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
        res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept'),
        res.setHeader(
            "Access-Control-Allow-Methods",
            "GET,POST,PATCH,DELETE,OPTIONS,PUT"
        );
    next();
});

app.use('/api/electicityBill', billsRoutes);
module.exports = app;