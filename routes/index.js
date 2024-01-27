var express = require("express");
var router = express.Router();
var homeCtrl = require("../controllers/home.controller");
const carModel = require("../models/car.model");

/* GET home page. */
router.get("/", (req, res) => {
    carModel
        .find({})
        .then((cars) => res.json(cars))
        .catch((err) => res.send(err));
});

module.exports = router;
