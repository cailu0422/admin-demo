(function () {
  'use strict';

  angular.module('BlurAdmin.pages.home', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider.state('home', {
        url : '/home',
        templateUrl : 'app/pages/home/home.html',
        title: 'Home Page',
          sidebarMeta: {
            icon : 'ion-android-home',  
            order: 200,
          },
    });
  }

})();