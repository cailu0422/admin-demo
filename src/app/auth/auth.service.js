(function () {
    'use strict';

    angular.module('BlurAdmin.auth').factory('AuthService', AuthService);

    function AuthService($q, $http, AuthStorage, ADMIN_VALUE, $state) {
        var authService = {};
        var defer = $q.defer();
        authService.login = function (credentials) {
            $http.post(ADMIN_VALUE.URL_LOGIN, credentials)
                .then(function (res) {
                    if (res.data.success === 'true') {
                        $http.post(ADMIN_VALUE.URL_USER_INFO)
                            .then(function (res) {
                                if (res.data.success === 'true') {
                                    AuthStorage.setCurrentUser(res.data.result);
                                    AuthStorage.set(true);
                                    $state.go('home');
                                    defer.resolve(res.data);
                                }
                            }, function (res) {
                                console.log(res);
                            });
                    } else {
                        // defer.resolve(res.data.errcode);
                        console.log('login fail');
                    }
                }, function (res) {
                    defer.reject(res);
                });
            return defer.promise;
        };

        // authService.isAuthenticated = function () {
        //     return !!Session.userId;
        // };

        // authService.isAuthorized = function (authorizedRoles) {
        //     if (!angular.isArray(authorizedRoles)) {
        //         authorizedRoles = [authorizedRoles];
        //     }
        //     return (authService.isAuthenticated() &&
        //         authorizedRoles.indexOf(Session.userRole) !== -1);
        // };

        return authService;
    }
})();