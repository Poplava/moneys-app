'use strict';

var AuthModule = require('./modules/auth');

module.exports = function(app) {
    console.log('Registering modules...');

    app.use('/auth', AuthModule.api);
    app.get('/foo', function(req, res) {
        res.json({ hello: null });
    });

    console.log('Done!');
};