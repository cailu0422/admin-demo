(function() {
    'use strict';

    angular.module('BlurAdmin.pages.posts').controller('PostsPendingController', PostsPendingController);

    function PostsPendingController($scope, $http, ADMIN_VALUE, $state, $uibModal) {
        var vm = this;
        $scope.formData = {};
        getPendingPostList();

        function getPendingPostList(){
            var params = {
              status : 1,
              limit : 99999
            }
            $http.post(ADMIN_VALUE.URL_POSTS_LIST, params)
            .then(function(res){
                if (res.data.success === 'true') {
                    // $scope.vendors = res.data.result.vendor;
                    console.log(res.data);
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
                };
                $scope.delete = function(){
                    $http.post(ADMIN_VALUE.URL_VENDOR_ACTION, params)
                    .then(function(res){
                        if (res.data.success === 'true') {
                            getVendorList();
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
          modalInstance.result.then(function(result){
            $scope.formData = {};
          });

        };
    }
})();