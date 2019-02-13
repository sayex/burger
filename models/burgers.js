var orm = require("../config/orm");

var burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },  insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    }, updateOne: function(coloumInput, vals, id, cb) {
        orm.updateOne("burgers", coloumInput, vals, id, function(res) {
            cb(res);
        });
    }
};



module.exports = burgers;