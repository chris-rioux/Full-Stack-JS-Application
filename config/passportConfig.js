var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

var models = require('../app_api/models');

passport.use(new LocalStrategy(
	function(email, password, callback) {
		models.Athlete.findOne({
			where : {
				email : email
			}
		})
		.then(function(athlete) {
			if (!athlete) {
				return callback(null, false);
			}
			bcrypt.compare(password, athlete.password, function(err, result) {
				if (err || !result) {
					return callback(null, false);
				}
				return callback(null, user);
			});
		})
		.catch(function(err) {
			return callback(err);
		});
	}));
	
passport.serializeUser(function(athlete, callback) {
	callback(null, athlete.id);
});

passport.deserializeUser(function(id, callback) {
	models.Athlete.findById(id)
	.then(function(athlete) {
		callback(null, athlete);
	})
	.catch(function(err) {
		callback(err);
	});
});

module.exports = passport;