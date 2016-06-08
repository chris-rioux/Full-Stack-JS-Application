module.exports = function(sequelize, DataTypes) {
	var Exercise = sequelize.define("Exercise", {
		mvmt_name : DataTypes.STRING,
		modality : DataTypes.STRING,
		description : DataTypes.STRING,
	}, 
	{
		underscored : true,
		classMethods: {
			associate : function(models) {
				Exercise.belongsToMany(models.Workout, {
					through : {
						model : models.WorkoutExercise,
					},
					foreignKey : 'exercise_id',
					constraints : false
				});
			}
		}
	});
	
	return Exercise;
}