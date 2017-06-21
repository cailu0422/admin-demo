(function() {
    'use strict';

    angular.module('BlurAdmin.pages.vendor').controller('VendorController', VendorController);

    function VendorController($scope, $http, ADMIN_VALUE, $state) {
        var vm = this;
        $http.post(ADMIN_VALUE.URL_VENDOR_LIST)
            .then(function(res){
                if (res.data.success === 'true') {
                    $scope.vendors = res.data.result.vendor;
                }
            }, function(res){

            });

        $scope.addVendor = function(){
            $state.go('vendor.add');
        }
        $scope.removeVendor = function(id){
            console.log(id);
            
        }
    }
})();
