define(function(require) {
    'use strict';

    var angular = require('angular'),
        template = require('text!./nav.tpl.html');

    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: template
        };
    };
});