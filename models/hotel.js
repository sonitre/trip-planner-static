var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Place = require('./place');


var hotelSchema = new Schema({
	name: String,
	place: [],
	num_stars: Number,
	amenities: String
});

var Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;