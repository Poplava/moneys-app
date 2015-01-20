define(function(require) {
    'use strict';

    var template = require('text!../templates/app.loading.tpl.html');

    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: template
        };
    };

});