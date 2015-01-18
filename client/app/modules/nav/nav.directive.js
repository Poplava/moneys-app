define(function(require) {
    'use strict';

    var angular = require('angular'),
        template = require('text!./nav.tpl.html');

    function NavDirective() {
        return {
            restrict: 'E',
            replace: true,
            template: template,
            scope: {},
            controller: controller
        };
    }

    function controller($scope, $auth, $http) {
        console.log($scope, $auth);
        $scope.login = function() {
            $auth.authenticate('google');
        };
        $scope.foo = function() {
            $http.get('/foo');
        };
    }

    controller.$inject = ['$scope', '$auth', '$http'];

    return NavDirective;
});