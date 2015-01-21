define(function(require) {
    var angular = require('angular'),
        AppDirective = require('./directive/app.directive'),

        module = angular.module('App', []);

    module.directive('mApp', AppDirective);

    return module;
});