'use strict';

var CategoryModel = require('./category.model'),
    Q = require('q'),
    _ = require('underscore');

module.exports.findByUserId = function(userId) {
    var defer = Q.defer(),
        queryPromise = CategoryModel.find({
            userId: userId
        }).exec();

    queryPromise.then(
        defer.resolve,
        defer.reject
    );

    return defer.promise;
};

module.exports.create = function(attrs, userId) {
    var defer = Q.defer();
    var model = new CategoryModel(_.extend({}, attrs, { userId: userId }));
    model.save(function(err, category) {
        defer.resolve(category);
    });

    return defer.promise;
};