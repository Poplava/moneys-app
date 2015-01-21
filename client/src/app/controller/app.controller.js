define(function(require) {
    'use strict';

    var AppController = function($scope) {
        $scope.model = 'hello app';
    };

    AppController.$inject = ['$scope'];

    return AppController;
});