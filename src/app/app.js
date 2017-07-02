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
    URL_LOGIN: 'http://118.89.159.242:9006/user/signin',
    URL_USER_INFO: 'http://118.89.159.242:9006/user/get_user_info',
    URL_USER_COUNT: 'http://118.89.159.242:9007/wsq/user/count/',
    URL_REPORTS_COUNT: 'http://118.89.159.242:9007/wsq/reports/count/',
    URL_POSTS_COUNT: 'http://118.89.159.242:9007/wsq/posts/count/',
    URL_VENDOR_LIST: 'http://118.89.159.242:9007/wsq/vendor/',
    URL_VENDOR_ACTION : 'http://118.89.159.242:9007/wsq/vendor/action',
    URL_CATEGORY_LIST: 'http://118.89.159.242:9007/wsq/category/',
    URL_CATEGORY_ACTION : 'http://118.89.159.242:9007/wsq/category/action',
    URL_USERS_LIST : 'http://118.89.159.242:9007/wsq/users/',
    URL_USERS_ACTION : 'http://118.89.159.242:9007/wsq/users/action'
  })
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    superadmin: '100',
    admin: '101',
    guest: '102'
  });
