define(function(require) {
    'use strict';

    var angular = require('angular'),
        template = require('text!./nav.tpl.html');

    function NavDirective() {
        return {
            restrict: 'E',
            replace: true,
            template: template,
            scope: {}
        };
    }

    return NavDirective;
});