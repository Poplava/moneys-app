define(function(require) {
    'use strict';

    var angular = require('angular'),
        Factory = require('./storage.factory'),

        module = angular.module('StorageServiceModule', []);

    module.factory('StorageFactory', Factory);

    return module;
});