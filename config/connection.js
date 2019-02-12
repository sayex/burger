var mysql = require("mysql");
var database = require("env.js");
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "newpassword",
        database: database
    });
}

connection.connect();
module.exports = connection;