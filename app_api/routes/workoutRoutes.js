var express = require('express');
var router = require('./woExRoutes');

var woCtrl = require('../controllers/woCtrl');

router.get('/:id/workouts', woCtrl.index);
router.get('/:id/workout/:wid', woCtrl.show);
router.post('/:id/workout', woCtrl.createWO);
// router.delete('/:id/workout/:wid', woCtrl.destroy);
// router.put('/:id/workout/:wid', woCtrl.update);
// 
module.exports = router;