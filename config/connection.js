var mysql = require("mysql");
try {
    var data = require("./env");
} catch (ex){
    // eslint-disable-next-line no-console
    console.log(ex);
}
// var data = require("./env");
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