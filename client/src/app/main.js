define(function(require) {
    'use strict';

    var angular = require('angular'),
        AuthServiceModule = require('service/auth'),
        StorageServiceModule = require('service/storage'),
        AppDirective = require('./directive/app.directive'),

        module = angular.module('App', [
            AuthServiceModule.name,
            StorageServiceModule.name
        ]);

    module.directive('mApp', AppDirective);

    return module;
});