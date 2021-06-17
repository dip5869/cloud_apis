const mysql = require('mysql');
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cloud'
});

module.exports = dbConn;