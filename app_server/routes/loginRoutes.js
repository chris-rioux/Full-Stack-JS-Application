var express = require('express');
var router = express.Router();
var passportConfig = require('../../config/passportConfig');

var loginCtrl = require('../controllers/loginCtrl');

router.get('/', loginCtrl.index);

router.get('/athletes', loginCtrl.athletes);

router.get('/home', loginCtrl.home);

router.get('/login', loginCtrl.login);

router.post('/login', loginCtrl.authenticate);
					
router.get('/logout', loginCtrl.logout);

router.get('/signup', loginCtrl.signup);

router.post('/signup', loginCtrl.register);

module.exports = router;