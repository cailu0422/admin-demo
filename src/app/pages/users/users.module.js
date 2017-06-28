(function () {
  'use strict';

  angular.module('BlurAdmin.pages.users', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('users', {
        url : '/users',
        templateUrl : 'app/pages/users/users.html',
        title: 'Users Page',
        controller: 'UsersController',
        controllerAs: 'vm',
        sidebarMeta: {
          icon : 'ion-android-people',  
          order: 500,
        },
        data: {
          role:'admin'
        }
    });
  }

})();