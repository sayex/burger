var connection = require("./connection");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            
            // console.log(result);
            cb(result);
        });
    },
    insertOne: function (tableInput, coloumInput, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, coloumInput, val], function (err, result) {
            if (err) throw err;
            
            // console.log(result);
            cb(result);
        });
    },
    updateOne: function (tableInput, coloumInput, val, id, cb) {
        var queryString = "UPDATE ?? SET ?? =? WHERE ID =?";
        connection.query(queryString, [tableInput, coloumInput, val, id], function (err, result) {
            if (err) throw err;
            
            // console.log(result);
            cb(result);
        });
    }
};



module.exports = orm;