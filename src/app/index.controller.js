(function() {
    'use strict';

    angular.module('BlurAdmin')
        .config(IndexConfig)
        .controller('IndexController', IndexController);

    function IndexController(AuthStorage, $http, ADMIN_VALUE) {
        var vm = this;

        vm.isAuthenticated = AuthStorage.get;
        vm.userinfo = {};

        // if(vm.isAuthenticated){
        //     vm.userinfo = getUserInfo();
        // }


    }

    function IndexConfig($httpProvider){
        $httpProvider.defaults.withCredentials = true;
        // $httpProvider.defaults.headers.post = {
        //     'Content-Type' : 'application/x-www-form-urlencoded'
        // }

    }
})();