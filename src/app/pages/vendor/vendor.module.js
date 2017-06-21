(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vendor', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('vendor', {
          url: '/vendor',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'VendorController',
          title: 'Vendor',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('vendor.list', {
          url: '/list',
          templateUrl: 'app/pages/vendor/vendor.html',
          title: 'Vendor Tables',
          sidebarMeta: {
            order: 0,
          },
        }).state('vendor.add', {
          url: '/add',
          templateUrl: 'app/pages/vendor/addVendor/addVendor.html',
          title: 'Add Vendor',
          sidebarMeta: {
            order: 100,
          },
        });
    $urlRouterProvider.when('/vendor','/vendor/list');
  }

})();
