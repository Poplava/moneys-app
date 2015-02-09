'use strict';

var CategoryService = require('../../service/category');

module.exports.api = {
    get: get,
    create: create
};

function handleError(err) {
    this.status(500).json(err);
}

function get(req, res) {
    CategoryService
        .findByUserId(req.user._id)
        .then(function(categories) {
            res.json(categories);
        }, handleError.bind(res));
}

function create(req, res) {
    var attrs = {};

    if (req.body.name) {
        attrs.name = req.body.name;
    }

    if (req.body.icon) {
        attrs.icon = req.body.icon;
    }

    CategoryService
        .create(attrs, req.user._id)
        .then(function(category) {
            res.json(category);
        });
}