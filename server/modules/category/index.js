'use strict';

var express = require('express'),
    router = express.Router(),
    authController = require('../auth/auth.controller'),
    controller = require('./category.controller');

router.get('/', authController.ensureAuthenticated, controller.api.get);
router.post('/', authController.ensureAuthenticated, controller.api.create);

module.exports.api = router;