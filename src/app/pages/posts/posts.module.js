(function () {
  'use strict';

  angular.module('BlurAdmin.pages.posts', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('posts', {
          url: '/posts',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'PostsController',
          title: 'Posts',
          sidebarMeta: {
            icon: 'ion-film-marker',
            order: 100,
          },
        }).state('posts.pending', {
          url: '/pending',
          templateUrl: 'app/pages/posts/pending/pending.html',
          title: 'Pending Posts',
          controller: 'PostsPendingController',
          sidebarMeta: {
            order: 0,
          },
        }).state('posts.verifying', {
          url: '/verifying',
          templateUrl: 'app/pages/posts/verifying/verifying.html',
          title: 'Verifying Posts',
          sidebarMeta: {
            order: 100,
          },
        }).state('posts.approved', {
          url: '/approved',
          templateUrl: 'app/pages/posts/approved/approved.html',
          title: 'Approved Posts',
          sidebarMeta: {
            order: 200,
          },
        }).state('posts.rejected', {
          url: '/rejected',
          templateUrl: 'app/pages/posts/rejected/rejected.html',
          title: 'Rejected Posts',
          sidebarMeta: {
            order: 300,
          },
        });
    $urlRouterProvider.when('/posts','/posts/pending');
  }

})();
