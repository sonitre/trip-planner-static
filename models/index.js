var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Hotel = require('./hotel.js');
var Place = require('./place.js');
var Restaurant = require('./restaurant');
var ThingToDo = require('./thingToDo');

module.exports = {
	Hotel: Hotel,
	Place: Place,
	Restaurant: Restaurant,
	ThingToDo: ThingToDo
};