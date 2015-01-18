'use strict';

var moment = require('moment'),
    jwt = require('jwt-simple'),
    async = require('async'),
    request = require('request'),

    config = require('../../config'),
    User = require('../user/user.model');

module.exports.api = {
    google: google,
    user: user
};

module.exports.ensureAuthenticated = ensureAuthenticated;
module.exports.createToken = createToken;

function google(req, res) {
    var params = {
        code: req.body.code,
        client_id: req.body.clientId,
        client_secret: config.auth.google.secret,
        redirect_uri: req.body.redirectUri,
        grant_type: 'authorization_code'
    };

    async.waterfall([
        requestToken,
        processToken
    ], processProfile);

    function requestToken(callback) {
        request.post(config.auth.google.accessTokenUrl, { json: true, form: params }, callback);
    }

    function processToken(responce, token, callback) {
        var accessToken = token.access_token;
        var headers = { Authorization: 'Bearer ' + token.access_token };

        request.get({ url: config.auth.google.peopleApiUrl, headers: headers, json: true }, callback);
    }

    function processProfile(err, response, profile) {
        if (req.headers.authorization) {
            User.findOne({google: profile.sub}, function (err, existingUser) {
                if (existingUser) {
                    return res.status(409).send({message: 'There is already a Google account that belongs to you'});
                }
                var token = req.headers.authorization.split(' ')[1];
                var payload = jwt.decode(token, config.auth.TOKEN_SECRET);
                User.findById(payload.sub, function (err, user) {
                    if (!user) {
                        return res.status(400).send({message: 'User not found'});
                    }
                    user.google = profile.sub;
                    user.name = user.name || profile.name;
                    user.save(responseToken.bind(this, user));
                });
            });
        } else {
            // Step 3b. Create a new user account or return an existing one.
            User.findOne({google: profile.sub}, function (err, existingUser) {
                if (existingUser) {
                    return responseToken(existingUser);
                }
                var user = new User({
                    name: profile.name,
                    email: profile.email,
                    picture: profile.picture,
                    google: profile.sub
                });
                user.save(responseToken.bind(this, user));
            });
        }
    }

    function responseToken(user) {
        return res.send({token: createToken(user)});
    }
}

function createToken(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(config.auth.TOKEN_EXPIRED_DAYS, 'days').unix()
    };

    return jwt.encode(payload, config.auth.TOKEN_SECRET);
}

function user(req, res) {
    res.status(200).json(req.user);
}

function ensureAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
    }
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, config.auth.TOKEN_SECRET);
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'Token has expired' });
    }

    User.findById(payload.sub, function (err, user) {
        if (!user) {
            return res.status(400).send({ message: 'User not found' });
        }
        req.user = user;
        next();
    });
}
