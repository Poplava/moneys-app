define(function(require) {
    'use strict';

    function factory($http, $auth) {
        return {
            model: {
                isAuthenticated: false,
                isDone: false,
                user: null
            },

            auth: function() {
                this.model.isAuthenticated = $auth.isAuthenticated();
                if ($auth.isAuthenticated()) {
                    this.fetchUser()
                        .success(function(user) {
                            this.model.user = user;
                        }.bind(this))
                        .error(function() {
                            this.logout();
                        }.bind(this))
                        .then(function() {
                            this.model.isDone = true;
                        }.bind(this));
                } else {
                    this.model.isDone = true;
                    this.model.user = null;
                }
            },

            login: function() {
                this.model.isDone = false;
                $auth.authenticate('google').then(this.auth.bind(this));
            },

            logout: function() {
                this.model.isDone = false;
                $auth.logout().then(this.auth.bind(this));
            },

            fetchUser: function() {
                return $http.get('/auth/user');
            }
        };
    }

    factory.$inject = ['$http', '$auth'];

    return factory;
});