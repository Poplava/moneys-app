define(function(require) {
    'use strict';

    var angular = require('angular'),

        template = require('text!./templates/home.tpl.html'),

        module = angular.module('HomeModule', []);

    function Screen($routeProvider) {
        $routeProvider.when('/', {
            template: template
        });
    }

    Screen.$inject = ['$routeProvider'];

    module.config(Screen);

    return module;
});