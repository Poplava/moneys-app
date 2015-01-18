define(function(require) {
    'use strict';
    
    var angular = require('angular'),
        AppDirective = require('./directives/app.directive'),
        AppAuthDirective = require('./directives/app.login.directive'),

        module = angular.module('AppModule', []);

    module.directive('dgApp', AppDirective);
    module.directive('dgAppLogin', AppAuthDirective);

    return module;
});
