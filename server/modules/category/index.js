'use strict';

var express = require('express'),
    router = express.Router(),
    authController = require('../auth/auth.controller'),
    controller = require('./category.controller');

router.get('/', authController.ensureAuthenticated, controller.api.getAll);

module.exports.api = router;