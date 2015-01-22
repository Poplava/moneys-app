define(function(require) {
    'use strict';

    function Factory($http, $auth, $q, StorageFactory) {
        return {
            model: {
                isAuthenticated: false,
                isDone: false,
                user: null
            },

            auth: function() {
                this.model.isAuthenticated = $auth.isAuthenticated();
                if (this.model.isAuthenticated) {
                    this.setUser()
                        .then((function() {
                            this.model.isDone = true;
                        }).bind(this));
                }
            },

            setUser: function() {
                var def = $q.defer(),
                    user = StorageFactory.get('user');

                if (user) {
                    this.model.user = user;
                    def.resolve(user);
                } else {
                    $http.get('/auth/user')
                        .success((function(user) {
                            this.model.user = user;
                            StorageFactory.save('user', user);
                            def.resolve(user);
                        }).bind(this))
                        .error(def.reject);
                }

                return def.promise;
            },

            login: function() {
                if (this.model.isAuthenticated) {
                    return;
                }

                this.model.isDone = false;
                $auth.authenticate('google').finally(this.auth.bind(this));
            }
        };
    }

    Factory.$inject = ['$http', '$auth', '$q', 'StorageFactory'];

    return Factory;
});
