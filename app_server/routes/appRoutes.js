var express = require('express');
var router = require('./loginRoutes.js');

var appCtrl = require('../controllers/appCtrl');

router.post('/createWO', appCtrl.createWO);

router.post('/addWOEX', appCtrl.addWOEX);

module.exports = router;