(function() {
    'use strict';

    angular.module('BlurAdmin.pages.category').controller('CategoryController', CategoryController);

    function CategoryController($scope, $http, ADMIN_VALUE, $state, $uibModal) {
        var vm = this;
        $scope.formData = {};
        $scope.selectedVendor = {};
        getCategoryList();
        getVendorList();

        $scope.addCategory = function(){
            $state.go('category.add');
        }
        $scope.removeCategory = function(id){
            var params = {
                action : "delete",
                category_id : id
            }
            open('app/pages/category/widgets/dangerModal.html', params);
        }

        $scope.addCategoryProcess = function(){
            $scope.formData.action = "add";
            $scope.formData.vendor = $scope.selectedVendor.selected._id;
            if($scope.formData.vendor){
              $http.post(ADMIN_VALUE.URL_CATEGORY_ACTION, $scope.formData)
              .then(function(res){
                  if (res.data.success === 'true') {
                      getCategoryList();
                      open('app/pages/category/widgets/successModal.html');
                  }
              }, function(res){

              });
            }
        }
        function getCategoryList(){
            $http.post(ADMIN_VALUE.URL_CATEGORY_LIST)
            .then(function(res){
                if (res.data.success === 'true') {
                    $scope.categories = res.data.result.category;
                }
            }, function(res){

            });
        }
        function getVendorList(){
            $http.post(ADMIN_VALUE.URL_VENDOR_LIST)
            .then(function(res){
                if (res.data.success === 'true') {
                    $scope.vendors = res.data.result.vendor;
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
                    $http.post(ADMIN_VALUE.URL_CATEGORY_ACTION, params)
                    .then(function(res){
                        if (res.data.success === 'true') {
                            getCategoryList();
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
