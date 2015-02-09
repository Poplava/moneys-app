define(function(require) {
    'use strict';

    var angular = require('angular'),

        module = angular.module('UserModule', []);

    function Controller($scope, $auth, $http) {
        $scope.meData = {};

        $scope.login = function() {
            $auth.authenticate('google')
                .then(function() {
                    return $http.get('/auth/me');
                })
                .success(function(user) {
                    console.log(user);
                });
        };

        $scope.me = function() {
            $http.get('/auth/me').success(function(me) {
                $scope.meData = JSON.stringify(me, null, 2);
            });
        };

        $scope.isAuthenticated = function() {
            return $auth.isAuthenticated();
        };
    }

    Controller.$inject = ['$scope', '$auth', '$http'];
    module.controller('UserController', Controller);

    return module;
});
