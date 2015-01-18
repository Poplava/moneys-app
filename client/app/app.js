define(function(require) {
    'use strict';

    var angular = require('angular'),
        NavModule = require('modules/nav'),
        HomeModule = require('modules/home'),

        RoutingConfig = require('config/routing'),
        AuthConfig = require('config/auth');

    require('angular-route');
    require('angular-resource');
    require('angular-satellizer');

    var app = angular.module('App', [
        HomeModule.name,
        NavModule.name
    ])
        .config(AuthConfig)
        .config(RoutingConfig);

    angular.bootstrap(document, [
        'ngRoute',
        'ngResource',
        'satellizer',
        app.name
    ]);
});