(function() {
    'use strict';

    angular.module('BlurAdmin').controller('IndexController', IndexController);

    function IndexController(AuthStorage) {
        var vm = this;

        vm.isAuthenticated = AuthStorage.get;

    }
})();