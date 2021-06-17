const express = require('express');
const machine = express.Router();
const bodyParser = require('body-parser');
machine.use(bodyParser.json());
machine.use(bodyParser.urlencoded({
    extended: true
}));

const dbConn = require('../../connection/dbcon.js');
//================================================
machine.post('/', function (req, res) {
    var data = {}
    let qry = 'INSERT INTO `machine`(`m_tag_id`, `m_name`, `m_ipaddress`, `m_instance_type`) VALUES ("' + req.body.tag + '","' + req.body.name + '","' + req.body.ipaddress + '","' + req.body.instance + '")';

    dbConn.query(qry, function (error, rows, fields) {
        if (error == null) {
            data["status"] = true;
            data["msg"] = 'Machine Added Successfully!!!';
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

machine.put('/', function (req, res) {
    var data = {}
    
    let qry = 'UPDATE `machine` SET `m_tag_id`="' + req.body.tag + '",`m_name`="' + req.body.name + '",`m_ipaddress`="' + req.body.ipaddress + '",`m_instance_type`="' + req.body.instance + '" WHERE m_id="' + req.body.mid + '"';

    dbConn.query(qry, function (error, rows, fields) {
        if (error == null) {
            data["status"] = true;
            data["msg"] = 'Machine Updated Successfully!!!';
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

machine.delete('/', function (req, res) {
    var data = {}

    let qry = 'DELETE FROM `machine` WHERE m_id="' + req.body.mid + '"';

    dbConn.query(qry, function (error, rows, fields) {
        if (error == null) {
            data["status"] = true;
            data["msg"] = 'Machine Deleted Successfully!!!';
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

module.exports = machine;
