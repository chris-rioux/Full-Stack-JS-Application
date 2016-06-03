module.exports = function(sequelize, DataTypes) {
    var WorkoutExercise = sequelize.define("WorkoutExercise", {
        workout_id : DataTypes.INTEGER,
        exercise_id : DataTypes.INTEGER,
        weight : DataTypes.DECIMAL,
        repetitions : DataTypes.INTEGER   
    });

    return WorkoutExercise;
}