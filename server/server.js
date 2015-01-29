'use strict';

var express = require('express'),
    app = express(),

    session = require('express-session'),
    bodyParser = require('body-parser'),

    config = require('./config'),
    routes = require('./routes'),

    mongoose = require('mongoose');

mongoose.connect(config.mongo.uri, config.mongo.options);

var staticDirName = __dirname.split('/');
staticDirName.pop();
app.use(express.static(staticDirName.join('/') + '/client'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/../client/');
app.set('view engine', 'html');

app.all('/', function(req, res) {
    res.render('index');
});

routes(app);

app.listen(config.port, config.ip, function () {
    console.log(
        'App listening at http://%s:%s, mode %s',
        this.address().address,
        this.address().port,
        process.env.NODE_ENV
    );
});
