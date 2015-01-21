define(function(require) {
    'use strict';

    var template = require('text!../templates/app.login.tpl.html');

    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: template
        };
    };

});