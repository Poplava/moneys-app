define(function(require) {
    'use strict';

    var angular = require('angular'),
        NavModule = require('modules/nav'),
        HomeModule = require('modules/home');

    require('angular-route');
    require('angular-resource');

    RoutingConfig.$inject = ['$locationProvider'];

    function RoutingConfig($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }

    var app = angular.module('App', [
        HomeModule.name,
        NavModule.name
    ])
        .config(RoutingConfig);

    angular.bootstrap(document, [
        'ngRoute',
        'ngResource',
        app.name
    ]);
});