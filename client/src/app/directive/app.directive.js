define(function(require) {
    'use strict';

    var controller = require('../controller/app.controller'),
        template = require('text!../template/app.html');

    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: template,
            controller: controller
        };
    };
});