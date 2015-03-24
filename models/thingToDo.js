var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Place = require('./place');

var thingToDoSchema = new Schema({
	name: String,
	place: [],
	age_range: String
});

var ThingToDo = mongoose.model('ThingToDo', thingToDoSchema);

module.exports = ThingToDo;
