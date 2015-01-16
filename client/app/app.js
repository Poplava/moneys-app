define(function(require) {
    'use strict';

    var angular = require('angular'),
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
        HomeModule.name
    ])
        .config(RoutingConfig);

    angular.bootstrap(document, [
        'ngRoute',
        'ngResource',
        app.name
    ]);
});