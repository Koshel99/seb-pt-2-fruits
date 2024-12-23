const mongoose = require("mongoose");

//

const fruitSchema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

// register model

const fruit = mongoose.model('fruit', fruitSchema);

// share it
module.exports = fruit;
