(function () {
  'use strict';

  angular.module('BlurAdmin.pages.report', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('report', {
      url: '/report',
      template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
      abstract: true,
      controller: 'ReportController',
      title: 'Report',
      sidebarMeta: {
        icon: 'ion-film-marker',
        order: 400,
      },
    }).state('report.post', {
      url: '/post',
      templateUrl: 'app/pages/report/post/post.html',
      title: 'Report Post',
      controller: 'ReportPostController',
      sidebarMeta: {
        order: 0,
      },
    }).state('report.user', {
      url: '/verifying',
      templateUrl: 'app/pages/posts/verifying/verifying.html',
      title: 'Report User',
      controller: 'ReportUserController',
      sidebarMeta: {
        order: 100,
      },
    });
    $urlRouterProvider.when('/report','/report/post');
  }

})();
