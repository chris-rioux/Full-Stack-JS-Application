var models = require('../models');

module.exports.index = function(req, res) {
	models.Exercise.findAll()
		.then(function(exercises) {
			res.send(exercises);
		})
		.catch(function(err) {
			console.log(err);
			res.status(500);
			res.send('500');
		});
};

module.exports.show = function(req, res) {};

module.exports.addExercise = function(req, res) {};

module.exports.destroy = function(req, res) {};

module.exports.update = function(req,res) {};