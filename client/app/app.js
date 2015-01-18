define(function(require) {
    'use strict';

    var angular = require('angular'),
        AppModule = require('modules/app'),
        NavModule = require('modules/nav'),
        AuthModule = require('modules/auth'),

        RoutingConfig = require('config/routing'),
        AuthConfig = require('config/auth');

    require('angular-route');
    require('angular-resource');
    require('angular-satellizer');

    var app = angular.module('App', [
        AppModule.name,
        NavModule.name,
        AuthModule.name
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