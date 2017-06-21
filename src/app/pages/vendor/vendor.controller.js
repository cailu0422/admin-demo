(function() {
    'use strict';

    angular.module('BlurAdmin.pages.vendor').controller('VendorController', VendorController);

    function VendorController($scope, $http, ADMIN_VALUE, $state, $uibModal) {
        var vm = this;
        $scope.formData = {};
        getVendorList();

        $scope.addVendor = function(){
            $state.go('vendor.add');
        }
        $scope.removeVendor = function(id){
            var params = {
                action : "delete",
                vendor_id : id
            }
            open('app/pages/vendor/widgets/dangerModal.html', params);
        }

        $scope.addVendorProcess = function(){
            $scope.formData.action = "add";
            $http.post(ADMIN_VALUE.URL_VENDOR_ACTION, $scope.formData)
            .then(function(res){
                if (res.data.success === 'true') {
                    getVendorList();
                    open('app/pages/vendor/widgets/successModal.html');
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
