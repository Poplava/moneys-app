define(function(require) {
    'use strict';

    var angular = require('angular');

    function Factory($http, $window) {
        var localStorage = $window.localStorage;
        return {
            save: function(key, data) {
                console.log('save', arguments);
                localStorage.setItem(key, angular.toJson(data));
            },

            get: function(key) {
                return JSON.parse(localStorage.getItem(key));
            }
        };
    }

    Factory.$inject = ['$http', '$window'];

    return Factory;
});
