var passportConfig = require('../../config/passportConfig');
var models = require('../../app_api/models');
var bcrypt = require('bcrypt');
const saltRounds = 13;

module.exports.index = function(req, res) {
	res.render('index');
};

module.exports.home = function(req, res) {
	res.render('log', {athlete : req.athlete});
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
			return res.redirect('/');
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
					return res.redirect('/');
				})
			});
	});
};

module.exports.logout = function(req, res) {
	req.logout();
	res.render('index');
}