define(function(require) {
    'use strict';

    var angular = require('angular'),
        AuthServiceModule = require('service/auth'),
        AppDirective = require('./directive/app.directive'),

        module = angular.module('App', [
            AuthServiceModule.name
        ]);

    module.directive('mApp', AppDirective);

    return module;
});