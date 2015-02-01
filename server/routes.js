'use strict';

var AuthModule = require('./modules/auth'),
    CategoryModule = require('./modules/category');

module.exports = function(app) {
    console.log('Registering modules...');

    app.all('/', function(req, res) {
        res.render('index');
    });

    app.use('/auth', AuthModule.api);

    app.use('/api/category', CategoryModule.api);

    console.log('Done!');
};