define(function(require) {
    'use strict';

    var angular = require('angular'),
        App = require('app'),

        RoutingConfig = require('config/routing'),
        AuthConfig = require('config/auth');

    require('angular-route');
    require('angular-resource');
    require('angular-satellizer');

    var app = angular.module('MoneysApp', [
        App.name
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