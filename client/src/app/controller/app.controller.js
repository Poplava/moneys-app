define(function(require) {
    'use strict';

    var AppController = function($scope, AuthFactory) {
        $scope.model = AuthFactory.model;

        $scope.login = AuthFactory.login.bind(AuthFactory);
        $scope.logout = AuthFactory.logout.bind(AuthFactory);

        AuthFactory.auth();
    };

    AppController.$inject = ['$scope', 'AuthFactory'];

    return AppController;
});