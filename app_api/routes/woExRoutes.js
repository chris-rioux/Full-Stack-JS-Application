var express = require('express');
var router = express.Router();
 
var woExCtrl = require('../controllers/woExCtrl');

router.get('/:id/workout/:wid/woExercises', woExCtrl.index);

// router.get('/:id/workout/:wid/woExercise/:weid', woExCtrl.show);

router.post('/:id/workout/:wid/woExercise', woExCtrl.addWOExercise);

// router.delete('/:id/workout/:wid/woExercise/:weid', woExCtrl.destroy);

// router.put('/:id/workout/:wid/woExercise/:weid', woExCtrl.update);
 
module.exports = router;