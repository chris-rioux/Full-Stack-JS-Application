module.exports = function(sequelize, DataTypes) {
    var Workout = sequelize.define("Workout", {
        wrkt_date : DataTypes.DATEONLY,
        wrkt_name : DataTypes.STRING,
        duration : DataTypes.DECIMAL,
        athlete_id : DataTypes.INTEGER
    }, 
    {
    	underscored : true,
        classMethods: {
            associate : function(models) {
                Workout.belongsTo(models.Athlete, {
                    onDelete : "CASCADE",
                    allowNull : false, // must be associated
                    foreignKey : 'athlete_id'
                });
                
                Workout.belongsToMany(models.Exercise, {
                	through : {
                		model : models.WorkoutExercise
                	},
                	foreignKey : 'workout_id'
                });
            }
        }
    });
    return Workout;
}