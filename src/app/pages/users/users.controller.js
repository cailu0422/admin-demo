(function() {
    'use strict';

    angular.module('BlurAdmin.pages.users').controller('UsersController', UsersController);

    function UsersController($scope, $http, ADMIN_VALUE, $uibModal) {
        var vm = this;
        vm.count = 0;
        vm.users = {};
        $scope.usersDataList = [];

        getUsersList();

        $scope.ban = function(id){
          var params = {
              action : "ban",
              user_id : id
          }
          open('app/pages/users/widgets/dangerModal.html', params);
        }

        $scope.unban = function(id){
          var params = {
              action : "unban",
              user_id : id
          }
          open('app/pages/users/widgets/infoModal.html', params);
        }

        function getUsersList(){
            $http.post(ADMIN_VALUE.URL_USERS_LIST)
            .then(function(res){
                if (res.data.success === 'true') {
                    vm.count = res.data.result.count;
                    vm.users = res.data.result.users;
                    $scope.usersDataList = res.data.result.users;
                    $scope.usersList = res.data.result.users;
                }
            }, function(res){

            });
        }

        function open(page, params){
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: page,
            controller: function($scope, $uibModalInstance){
                $scope.ok = function () {
                  $uibModalInstance.close();
                }
                $scope.action = function(){
                    $http.post(ADMIN_VALUE.URL_USERS_ACTION, params)
                    .then(function(res){
                        if (res.data.success === 'true') {
                            getUsersList();
                            $uibModalInstance.close();
                        }
                    }, function(res){
                        $uibModalInstance.close();
                    });
                }
            },
            resolve: {
              items: function () {
                return $scope.items;
              }
            }
          });
        };
    }
})();
