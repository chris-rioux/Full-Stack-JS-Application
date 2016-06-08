module.exports = function(sequelize, DataTypes) {
	var Athlete = sequelize.define("Athlete", {
		name : DataTypes.STRING,
		email : DataTypes.STRING,
		birthday : DataTypes.DATEONLY,
		password : DataTypes.STRING,
		gym : DataTypes.STRING
	}, 
    {
    	underscored : true,
		classMethods: {
			associate : function(models) {
				Athlete.hasMany(models.Workout, {
					foreignKey : 'athlete_id'
				})
			}
		}
	});
	
	return Athlete;
}