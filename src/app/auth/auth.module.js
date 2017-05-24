(function () {
    'use strict';

    angular.module('BlurAdmin.auth', [
        'LocalStorageModule'
    ]).config(config);

    function config($httpProvider) {
        // $httpProvider.interceptors.push('authInterceptor');
    }
})();