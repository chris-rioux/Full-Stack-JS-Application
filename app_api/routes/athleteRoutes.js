var express = require('express');
var router = require('./workoutRoutes');

var athleteCtrl = require('../controllers/athleteCtrl');

router.get('/', athleteCtrl.index);

router.get('/:id', athleteCtrl.show);

router.post('/', athleteCtrl.create);

router.delete('/:id', athleteCtrl.destroy);

router.put('/:id', athleteCtrl.update);

module.exports = router;