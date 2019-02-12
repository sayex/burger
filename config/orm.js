var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            // eslint-disable-next-line no-console
            console.log(result);
        });
    },
    insertOne: function () {
        var queryString = "";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            // eslint-disable-next-line no-console
            console.log(result);
        });
    },
    upateOne: function () {
        var queryString = "";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            // eslint-disable-next-line no-console
            console.log(result);
        });
    }
};



module.exports = orm;