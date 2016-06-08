var models = require('../models');

// module.exports.index = function(req, res) {
// 	models.WorkoutExercise.findAll()
// 		.then(function(workoutexercises) {
// 			res.send(workoutexercises);
// 		})
// 		.catch(function(err) {
// 			console.log(err);
// 			res.status(500);
// 			res.send('500');
// 		});
// };

module.exports.index = function(req, res) {
	models.Workout.findById(req.params.wid, {
		include : [ models.Exercise ]
	})
	.then(function(workoutexercises) {
		res.send(workoutexercises);
	});	
};

module.exports.show = function(req, res) {};

module.exports.addWOExercise = function(req, res) {
	var workoutexercise = req.body;
	models.WorkoutExercise.create(
		{ 
			workout_id : workoutexercise.workout_id,
			exercise_id : workoutexercise.exercise_id,
			weight : workoutexercise.weight,
			repetitions : workoutexercise.repetitions
		}
	)
	res.sendStatus(201);
};

module.exports.destroy = function(req, res) {};

module.exports.update = function(req,res) {};