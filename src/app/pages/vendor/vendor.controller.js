(function() {
    'use strict';

    angular.module('BlurAdmin.pages.vendor').controller('VendorController', VendorController);

    function VendorController($scope, $http, ADMIN_VALUE, $state) {
        var vm = this;
        getVendorList();

        $scope.addVendor = function(){
            $state.go('vendor.add');
        }
        $scope.removeVendor = function(id){
            console.log(id);

        }
        $scope.formData = {};
        $scope.addVendorProcess = function(){
            $scope.formData.action = "add";
            $http.post(ADMIN_VALUE.URL_VENDOR_ACTION, $scope.formData)
            .then(function(res){
                if (res.data.success === 'true') {
                    getVendorList();
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
    }
})();
