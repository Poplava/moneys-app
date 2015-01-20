'use strict';

var config;

if (process.env.NODE_ENV === 'development') {
    config = require('./development.local');
} else if (process.env.NODE_ENV === 'production') {
    config = require('./production.local');
} else {
    throw new Error('Unknown NODE_ENV');
}

module.exports = config;