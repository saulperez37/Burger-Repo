const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function (req, res) {
    burger.create([
        "burger_name", "devoured"], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json(result);
    });
});

router.put("/api/burger/:id", function (req, res) {

    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update([
        "devoured"], [
        req.body.devoured],
        condition, function (result) {
            res.json(result);
        });
});

module.exports = router;