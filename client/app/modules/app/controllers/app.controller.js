define(function(require) {
    'use strict';
    
    var AppController = function($scope, AuthFactory) {
        $scope.model = AuthFactory.model;
        $scope.logout = function() {
            AuthFactory.logout();
        };
        $scope.login = function() {
            AuthFactory.login();
        };
        AuthFactory.auth();
    };

    AppController.$inject = ['$scope', 'AuthFactory'];

    return AppController;
});