var models = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 13;

module.exports.show = function(req, res) {
	models.Athlete.findById(req.params.id)
		.then(function(athlete) {
			res.send(athlete);
		})
};

module.exports.create = function(req, res) {};

module.exports.destroy = function(req, res) {};

module.exports.update = function(req,res) {};