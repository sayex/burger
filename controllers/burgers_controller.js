var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers");

router.get("/", function(req, res){
    burgers.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        // eslint-disable-next-line no-console
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.insertOne(["burger_name"], [req.body.name], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

module.exports = router;