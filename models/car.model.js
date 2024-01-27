var mongoose = require("mongoose");

var carSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
});

var carModel = mongoose.model("cars", carSchema);

module.exports = carModel;
