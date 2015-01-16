'use strict';

var express = require('express'),
    app = express();

var staticDirName = __dirname.split('/');
staticDirName.pop();
app.use(express.static(staticDirName.join('/') + '/client'));

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/pages');
app.set('view engine', 'html');

app.all('*', function(req, res) {
    res.render('index');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s, mode %s', host, port, process.env.NODE_ENV);
});