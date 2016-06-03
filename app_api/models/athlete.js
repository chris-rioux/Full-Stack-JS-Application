module.exports = function(sequelize, DataTypes) {
	var Athlete = sequelize.define("Athlete", {
		name : DataTypes.STRING,
		email : DataTypes.STRING,
		birthday : DataTypes.DATEONLY,
		password : DataTypes.STRING,
		gym : DataTypes.STRING
	}, {
		classMethods: {
			associate : function(models) {
				Athlete.hasMany(models.Workout)
			}
		}
	});
	
	return Athlete;
}