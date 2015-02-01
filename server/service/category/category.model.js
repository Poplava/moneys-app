'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true,
        default: 'default'
    },
    amount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Category', CategorySchema);
