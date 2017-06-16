/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('PageTopCtrl', PageTopCtrl);

  /** @ngInject */
  function PageTopCtrl($scope, AuthStorage, $state) {
    $scope.signOut = function(){
      AuthStorage.remove();
      AuthStorage.removeCurrentUser();
      $state.go('login');
    }
  }
})();