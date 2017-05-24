(function() {
    'use strict';

    angular.module('BlurAdmin.auth').service('AuthStorage', AuthStorage);

    function AuthStorage(localStorageService) {

        this.get = get;
        this.set = set;
        this.remove = remove;

        var key = 'blur-admin-token';

        function get() {
            return localStorageService.get(key);
        }

        function set(token) {
            return localStorageService.set(key, token);
        }

        function remove() {
            return localStorageService.remove(key);
        }
    }
})();