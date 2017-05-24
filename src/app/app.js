'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages',
  'BlurAdmin.auth'
])
  .constant('ADMIN_VALUE', {
        URL_LOGIN: 'http://118.89.159.242:9006/user/signin'
    });