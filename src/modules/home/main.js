define(function(require) {
    'use strict';

    var angular = require('angular'),
        module = angular.module('HomeModule', []),
        homeTemplate = require('text!./templates/home.tpl.html');

    HomeScreen.$inject = ['$routeProvider'];
    module.config(HomeScreen);

    return module;

    function HomeScreen($routeProvider) {
        $routeProvider
            .when('/', {
                template: homeTemplate
            })
            .otherwise({
                redirectTo: '/'
            });
    }
});