var request = require('request');
var apiURI = 'http://localhost:3000';

if (process.env.NODE_ENV == 'production') {
	apiURI = 'https://mighty-sands-16374.herokuapp.com';
}

module.exports.createWO = function(req, res) {
	request.post({
		url : apiURI + '/athlete/' + req.params.id + '/workout',
		headers : {
			'Content-type' : 'application/json'
		},
		body : JSON.stringify({
			wrkt_date : req.body.wrkt_date,
			wrkt_name : req.body.wrkt_name,
			duration : req.body.duration,
			athlete_id : req.body.athlete_id
		}),
		function(error, response, body) {
			if (error) {
				return console.error(error);
			}
			if (!error && response.statusCode == 201) {
			}
		}
	});
	
	res.redirect('/home');
};

module.exports.addWOEX = function(req, res) {

	console.log('In addWOEX');
	console.log('********************');
	console.log(req.body);
	
	
	request.post({
		url : apiURI + '/athlete/' + req.params.id + '/workout/' + req.params.wid + '/woExercise',
		headers : {
			'Content-type' : 'application/json'
		},
		body : JSON.stringify({
			workout_id : req.body.workout_id,
			exercise_id : req.body.exercise_id,
			weight : req.body.weight,
			repetitions : req.body.repetitions
		}),
		function(error, response, body) {
			if (error) {
				return console.error(error);
			}
			if (!error && response.statusCode == 201) {
			}
		}
	});
	
	res.redirect('/home');
};