define(function(require) {
    'use strict';

    var controller = require('../controllers/app.controller'),
        template = require('text!../templates/app.directive.tpl.html');

    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: template,
            scope: {},
            controller: controller
        };
    };

});