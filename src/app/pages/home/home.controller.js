(function() {
    'use strict';

    angular.module('BlurAdmin.pages.home').controller('HomeController', HomeController);

    function HomeController($http, ADMIN_VALUE) {
        var vm = this;
        vm.counts = {};

        $http.post(ADMIN_VALUE.URL_USER_COUNT)
            .then(function(res){
                if (res.data.success === 'true') {
                    vm.counts.user_count = res.data.result.count;
                }
            }, function(res){
                vm.counts.user_count = 'error';
            });
        $http.post(ADMIN_VALUE.URL_REPORTS_COUNT)
            .then(function(res){
                if (res.data.success === 'true') {
                    vm.counts.reports_count = res.data.result.count;
                }
            }, function(res){
                vm.counts.reports_count = 'error';
            });
        $http.post(ADMIN_VALUE.URL_POSTS_COUNT)
            .then(function(res){
                if (res.data.success === 'true') {
                    vm.counts.posts_count = res.data.result.count;
                }
            }, function(res){
                vm.counts.posts_count = 'error';
            });
       console.log(vm.counts);     

    }
})();