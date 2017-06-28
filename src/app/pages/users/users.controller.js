(function() {
    'use strict';

    angular.module('BlurAdmin.pages.users').controller('UsersController', UsersController);

    function UsersController($http, ADMIN_VALUE) {
        var vm = this;
        vm.count = 0;
        vm.users = {};

        getUsersList();

        function getUsersList(){
            $http.post(ADMIN_VALUE.URL_USERS_LIST)
            .then(function(res){
                if (res.data.success === 'true') {
                    vm.count = res.data.result.count;
                    vm.users = res.data.result.users;
                }
            }, function(res){

            });
        }
    }
})();