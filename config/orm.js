var connection = require("./connection");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            // eslint-disable-next-line no-console
            console.log(result);
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) {
                throw err;
            }
            // eslint-disable-next-line no-console
            console.log(result);
            cb(result);
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