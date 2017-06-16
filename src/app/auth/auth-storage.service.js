(function() {
    'use strict';

    angular.module('BlurAdmin.auth').service('AuthStorage', AuthStorage);

    function AuthStorage(localStorageService) {

        this.get = get;
        this.set = set;
        this.remove = remove;
        this.setCurrentUser = setCurrentUser;
        this.getCurrentUser = getCurrentUser;
        this.removeCurrentUser = removeCurrentUser;

        var key = 'blur-admin-token';
        var currentUser = 'current-user';

        function get() {
            return localStorageService.get(key);
        }

        function set(token) {
            return localStorageService.set(key, token);
        }

        function remove() {
            return localStorageService.remove(key);
        }

        function setCurrentUser(user){
            return localStorageService.set(currentUser, user);
        }

        function getCurrentUser(){
            return localStorageService.get(currentUser);
        }

        function removeCurrentUser() {
            return localStorageService.remove(currentUser);
        }
    }
})();