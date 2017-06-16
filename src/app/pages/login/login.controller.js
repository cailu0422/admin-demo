/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.login')
    .controller('LoginCtrl', LoginCtrl);

  /** @ngInject */
  function LoginCtrl($rootScope, $scope, $state, AuthStorage, ADMIN_VALUE, AuthService, AUTH_EVENTS) {
    var vm = this;
    vm.authenticate = authenticate;
    vm.credentials = {
      username: '',
      password: '',
      company: 'Yuninno',
      product: 'Duanzi'
    }

    if (AuthStorage.get()) {
      $state.go('home');
    }

    function authenticate(credentials) {
      if (credentials) {
        credentials.company = 'Yuninno';
        credentials.product = 'Duanzi';
      }
      
      // $http.post(ADMIN_VALUE.URL_LOGIN, credentials)
      //           .then(function (res) {
      //             AuthStorage.set(res.data.success === 'true' ? true : false);
      //             if(res.data.result && res.data.result === 'SIGN_IN_OK'){
      //               $state.go('dashboard');
      //             }
      //           }, function (res) {
      //               console.log(res);
      //           });
      var loginPromise = AuthService.login(credentials);
      loginPromise.then(function (user) {
        //  console.log('login success promise', user);
        // $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        // $scope.$parent.setCurrentUser(user);

     
      }, function () {
        console.log('login fail promise');
        // $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    }
  }

})();
