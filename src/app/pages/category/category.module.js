(function () {
  'use strict';

  angular.module('BlurAdmin.pages.category', ['ui.select', 'ngSanitize'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('category', {
          url: '/category',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'CategoryController',
          title: 'Category',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 400,
          },
        }).state('category.list', {
          url: '/list',
          templateUrl: 'app/pages/category/category.html',
          title: 'Category Tables',
          sidebarMeta: {
            order: 0,
          },
        }).state('category.add', {
          url: '/add',
          templateUrl: 'app/pages/category/addCategory/addCategory.html',
          title: 'Add Category',
          sidebarMeta: {
            order: 100,
          },
        });
    $urlRouterProvider.when('/category','/category/list');
  }

})();
