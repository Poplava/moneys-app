'use strict';

var express = require('express'),
    router = express.Router(),
    controller = require('./auth.controller');

router.post('/google', controller.google);

module.exports.api = router;