'use strict';

var CategoryModel = require('./category.model');

module.exports.getAll = function() {
    return CategoryModel.find().exec();
};

module.exports.add = function(attrs) {
    var model = new CategoryModel(attrs);
    model.save();
};