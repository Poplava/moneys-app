define(function(require) {
    'use strict';
    
    var angular = require('angular'),
        directive = require('./directives/app.directive'),

        module = angular.module('AppModule', []);

    module.directive('dgApp', directive);

    return module;
});
