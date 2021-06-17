const express = require('express');
const clust = express.Router();
const bodyParser = require('body-parser');
clust.use(bodyParser.json());
clust.use(bodyParser.urlencoded({
    extended: true
}));

const dbConn = require('../../connection/dbcon.js');
//================================================
clust.post('/', function (req, res) {
    var data = {}
    let qry = 'INSERT INTO `cluster`(`cl_name`, `cl_m_id`, `cl_region`) VALUES ("' + req.body.name + '","' + req.body.machine + '", "' + req.body.region + '")';

    dbConn.query(qry, function (error, rows, fields) {
        if (error == null) {
            data["status"] = true;
            data["msg"] = 'Cluster Added Successfully!!!';
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


clust.put('/', function (req, res) {
    var data = {}
    
    let qry = 'UPDATE `cluster` SET `cl_m_id`="' + req.body.machine + '",`cl_name`="' + req.body.name + '",`cl_region`="' + req.body.region + '" WHERE cl_id="' + req.body.cl_id + '"';

    dbConn.query(qry, function (error, rows, fields) {
        if (error == null) {
            data["status"] = true;
            data["msg"] = 'Cluster Updated Successfully!!!';
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

clust.delete('/', function (req, res) {
    var data = {}

    let qry = 'DELETE FROM `cluster` WHERE cl_id="' + req.body.cl_id + '"';

    dbConn.query(qry, function (error, rows, fields) {
        if (error == null) {
            data["status"] = true;
            data["msg"] = 'Cluster Deleted Successfully!!!';
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

module.exports = clust;
