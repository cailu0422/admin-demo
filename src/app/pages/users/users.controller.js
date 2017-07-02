(function() {
    'use strict';

    angular.module('BlurAdmin.pages.users').controller('UsersController', UsersController);

    function UsersController($scope, $http, ADMIN_VALUE, $uibModal) {
        var vm = this;
        vm.count = 0;
        vm.users = {};
        $scope.usersDataList = [];
        $scope.smartTablePageSize = 10;
        $scope.currentUser = {};

        getUsersList();

        $scope.userDetail = function(user){
          open('app/pages/users/widgets/detailModal.html', user);
        }

        $scope.ban = function(id, $event){
          var params = {
              action : "ban",
              user_id : id
          }
          open('app/pages/users/widgets/dangerModal.html', params);
          $event.stopPropagation();
        }

        $scope.unban = function(id, $event){
          var params = {
              action : "unban",
              user_id : id
          }
          open('app/pages/users/widgets/infoModal.html', params);
          $event.stopPropagation();
        }

        function getUsersList(){
            var params = {
              limit : 99999
            }
            $http.post(ADMIN_VALUE.URL_USERS_LIST, params)
            .then(function(res){
                if (res.data.success === 'true') {
                    console.log(res.data.result);
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
                $scope.user = params;
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
