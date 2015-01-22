define(function(require) {
    'use strict';

    var AppController = function($scope, AuthFactory) {
        $scope.model = AuthFactory.model;
        $scope.state = {
            isReady: false
        };

        $scope.login = AuthFactory.login.bind(AuthFactory);

        AuthFactory.auth();
    };

    AppController.$inject = ['$scope', 'AuthFactory'];

    return AppController;
});