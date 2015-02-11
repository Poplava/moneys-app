define(function(require) {
    'use strict';

    var angular = require('angular'),
        UserModule = require('module/user'),
        template = require('text!./template/root.html'),

        module = angular.module('RootScreen', [
            UserModule.name
        ]);

    Screen.$inject = ['$routeProvider'];

    module.config(Screen);

    return module;

    function Screen($routeProvider) {
        $routeProvider
            .when('/categories', {
                template: template
            })
            .otherwise({
                redirectTo: '/categories'
            });
    }
});
