var express = require('express');
var router = express.Router();
// var router = require('./workoutRoutes');

var athleteCtrl = require('../controllers/athleteCtrl');

router.get('/:id', athleteCtrl.show);
router.post('/', athleteCtrl.create);
router.delete('/:id', athleteCtrl.destroy);
router.put('/:id', athleteCtrl.update);

module.exports = router;