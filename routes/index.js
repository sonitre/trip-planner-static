var router = require('express').Router();
var models = require('../models');
var async = require('async');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var ThingToDo = models.ThingToDo;

router.get('/', function(req, res, next){

	var getAllData = {
		Hotel: function(done) {
			Hotel.find({}, function(err, hotels) {
				if (err) return next(err);
				done(null, hotels);
			});
		},

		Restaurant: function(done) {
			Restaurant.find({}, function(err, restaurants) {
				if (err) return next(err);
				done(null, restaurants);
			});
		},

		ThingToDo: function(done) {
			ThingToDo.find({}, function(err, thingsToDo) {
				if (err) return next(err);
				done(null, thingsToDo);
			});
		}
	};

	async.parallel(getAllData, function(err, results) {
		res.render('index', results);
	});
});

module.exports = router;