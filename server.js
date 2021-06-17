const express = require('express');
const app = express();
const cluster = require('./app/services/cluster.js');
const machine = require('./app/services/machine.js');
const tags = require('./app/services/tags.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    console.log("Request received to '/' ");
    res.send("***Welcome to Admin Panel***");
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});


app.use('/cluster', cluster);
app.use('/machine', machine);
app.use('/tags', tags);


//==================================================================================================
app.listen(8000, function(){
    console.log("Server Started on 8000.....")
    console.log("==================================================================================================")
});
