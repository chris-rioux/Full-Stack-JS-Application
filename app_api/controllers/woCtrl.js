var models = require('../models');

module.exports.index = function(req, res) {
	models.Workout.findAll()
		.then(function(workouts) {
			res.send(workouts);
		})
		.catch(function(err) {
			console.log(err);
			res.status(500);
			res.send('500');
		});
};

module.exports.show = function(req, res) {
	models.Workout.findById(req.params.wid, {
		include : [ models.Exercise ]
	})
	.then(function(exercise) {
		res.send(exercise);
	});
};

module.exports.createWO = function(req, res) {
	var workout = req.body;
	models.Workout.create(
		{ 
			wrkt_name : workout.wrkt_name,
			wrkt_date : workout.wrkt_date,
			duration : workout.duration,
			athlete_id : workout.athlete_id
		}
	)
	res.sendStatus(201);	
};

module.exports.destroy = function(req, res) {};

module.exports.update = function(req,res) {};