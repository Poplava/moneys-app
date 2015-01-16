define(function(require) {
    'use strict';

    var angular = require('angular'),
        NavDirective = require('./nav.directive'),
        module = angular.module('NavModule', []);

    module.directive('dgNav', NavDirective);

    return module;
});