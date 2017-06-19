(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vendor', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('vendor', {
        url : '/vendor',
        templateUrl : 'app/pages/vendor/vendor.html',
        title: 'Vendor Page',
        controller: 'VendorController',
        controllerAs: 'vm',
        sidebarMeta: {
            icon : 'ion-person-stalker',
            order: 300,
        },
    });
  }

})();
