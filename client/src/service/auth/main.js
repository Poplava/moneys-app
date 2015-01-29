define(function(require) {
    'use strict';

    var angular = require('angular'),
        AuthFactory = require('./auth.factory'),

        module = angular.module('AuthServiceModule', []);

    module.factory('AuthFactory', AuthFactory);

    return module;
});