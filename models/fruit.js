const mongoose = require("mongoose");

//

const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

// register model

const fruit = mongoose.model('fruit', fruitSchema);

// 3) share it with the rest of the app
module.exports = fruit;
