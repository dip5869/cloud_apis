const express = require('express');
const tags = express.Router();
const bodyParser = require('body-parser');
tags.use(bodyParser.json());
tags.use(bodyParser.urlencoded({
    extended: true
}));

const dbConn = require('../../connection/dbcon.js');
//================================================
tags.post('/', function (req, res) {
    var data = {}
    let qry = 'INSERT INTO `tags`(`t_name`) VALUES ("' + req.body.name + '")';

    dbConn.query(qry, function (error, rows, fields) {
        if (error == null) {
            data["status"] = true;
            data["msg"] = 'Tags Added Successfully!!!';
            res.send(data);
        }
        else {
            data["status"] = false;
            data["code"] = error.code;
            data["msg"] = error.sqlMessage;
            res.send(data);
        }
    });
    return res;
});

module.exports = tags;
