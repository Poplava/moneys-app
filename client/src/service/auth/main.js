define(function(require) {
    'use strict';

    var angular = require('angular'),
        StorageServiceModule = require('service/storage'),
        AuthFactory = require('./auth.factory'),

        module = angular.module('AuthServiceModule', [
            StorageServiceModule.name
        ]);

    module.factory('AuthFactory', AuthFactory);

    return module;
});