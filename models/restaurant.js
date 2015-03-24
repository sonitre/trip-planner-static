var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Place = require('./place');

var restaurantSchema = new Schema({
	name: String,
	place: [],
	cuisine: String,
	price: Number
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;