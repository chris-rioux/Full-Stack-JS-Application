var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcrypt');
const saltRounds = 13;
var request = require('request');
var apiURI = 'http://localhost:3000'

if (process.env.NODE_ENV == 'production') {
	apiURI = 'https://mighty-sands-16374.herokuapp.com';
}

module.exports.index = function(req, res) {
	res.render('index');
};

module.exports.athletes = function(req, res) {
	request.get(apiURI + '/athletes', function(error, response, body) {
		if (!error) {
			res.render('home', { athletes : JSON.parse(body) });
		}
		else {
			res.sendStatus(500);
		}
	})
};

module.exports.home = function(req, res) {
	if (req.user) {
		request.get(apiURI + '/athlete/' + req.user.id, function(error, response, athlete) {
			if (!error) {
				request.get(apiURI + '/exercises', function(err, resp, exercises) {
					if (!error) {
						res.render('home', { 
												athlete : JSON.parse(athlete),
												exercises : JSON.parse(exercises) 
											});
					}
					else {
						res.sendStatus(500);
					}
				})
			}
			else {
				res.sendStatus(500);
			}
		})
	}
	else {
		res.redirect('/');
	}
};

module.exports.login = function(req, res) {
	res.render('login');
};

module.exports.authenticate = function(req, res) {
	passportConfig.authenticate('local', function(err, athlete, info) {
		if (err || !athlete) {
			return res.redirect('/');
		}
		req.login(athlete,function(err) {
			return res.redirect('/home');
		})
	})(req,res);
};

module.exports.signup = function(req, res) {
	res.render('signup');
};

module.exports.register = function(req, res) {
	bcrypt.hash(req.body.password, saltRounds, function(err, hash){
		models.Athlete.create({
			name : req.body.name,
			email : req.body.email,
			birthday : req.body.birthday,
			password : hash,
			gym : req.body.gym
		})
			.then(function(athlete) {
				req.login(athlete,function(err) {
					return res.redirect('/home');
				})
			});
	});
};

module.exports.logout = function(req, res) {
	req.logout();
	res.render('index');
}