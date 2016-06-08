var models = require('../models');

module.exports.index = function(req, res) {
	models.Athlete.findAll()
		.then(function(athletes) {
			res.send(athletes);
		})
		.catch(function(err) {
			console.log(err);
			res.status(500);
			res.send('500');
		});
};

module.exports.show = function(req, res) {
	models.Athlete.findById(req.params.id, {
		include : [ 
			{ 
				model : models.Workout,
				include : models.Exercise
			} 
		]
	})
		.then(function(athlete){
			res.send(athlete);
		})
};

module.exports.create = function(req, res) {};

module.exports.destroy = function(req, res) {};

module.exports.update = function(req,res) {};