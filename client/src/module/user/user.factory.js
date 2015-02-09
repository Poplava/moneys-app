define(function(require) {
    var angular = require('angular');

    function UserFactory($resource, $auth) {
        var UserModel = $resource('/auth/:_id', {
            me: {
                params: {
                    '_id': 'me'
                }
            }
        });

        var factory = {
            isAuthenticated: $auth.isAuthenticated
        };

        return factory;
    }

    UserFactory.$inject = ['$resource', '$auth'];

    return UserFactory;
});