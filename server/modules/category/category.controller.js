'use strict';

var CategoryService = require('../../service/category');

module.exports.api = {
    getAll: getAll
};

function handleError(err) {
    this.status(500).json(err);
}

function getAll(req, res) {
    CategoryService
        .getAll()
        .then(function(categories) {
            res.json(categories);
        }, handleError.bind(res));
}