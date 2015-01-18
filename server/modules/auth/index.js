'use strict';

var express = require('express'),
    router = express.Router(),
    controller = require('./auth.controller');

router.post('/google', controller.api.google);
router.get('/user', controller.ensureAuthenticated, controller.api.user);

module.exports.api = router;