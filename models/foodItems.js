var mongoose = require('mongoose')

mongoose.createConnection('mongodb://localhost/test');

var foodItems = new mongoose.Schema({
    title: String,
    description: String,
    price: String,
    quantity: String
})

module.exports = mongoose.model('Items',foodItems)
