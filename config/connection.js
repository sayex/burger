var mysql = require("mysql");
var data = require("./env");
var connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: data.username,
        password: data.password,
        database: data.database
    });
}

connection.connect();
module.exports = connection;