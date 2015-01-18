define(function(require) {
    'use strict';

    var angular = require('angular'),

        AuthFactory = require('./services/auth.factory'),

        module = angular.module('AuthModule', []);

    module.factory('AuthFactory', AuthFactory);

    return module;
});