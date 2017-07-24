(function() {
    'use strict';

    angular.module('BlurAdmin.pages.report').controller('ReportPostController', ReportPostController);

    function ReportPostController($scope, $http, ADMIN_VALUE, $state, $uibModal) {
        var vm = this;
        $scope.selectedReport = [];
        $scope.reportsDataList = [];
        $scope.smartTablePageSize = 10;
        getReportPostList();

        $scope.postDetail = function(post){
          console.log(post);

          open('app/pages/posts/widgets/detailModal.html', post, 'lg');
        }

        $scope.rejectReport = function(){
          //action mark status 4
          var post_id = $scope.selectedPost.join(',');
          if (post_id){
            var params = {
              action : 'mark',
              status : 4,
              post_id : post_id
            }
            $http.post(ADMIN_VALUE.URL_POSTS_ACTION, params)
            .then(function(res){
                if (res.data.success === 'true') {
                    open('app/pages/posts/widgets/successModal.html');
                }
            }, function(res){

            });
          } else {
            open('app/pages/posts/widgets/warningModal.html');
          }
        }
        $scope.deleteReport = function(){
          //action delete
          var post_id = $scope.selectedPost.join(',');
          if (post_id){
            var params = {
              action : 'delete',
              post_id : post_id
            }
            open('app/pages/posts/widgets/dangerModal.html', params);
          } else {
            open('app/pages/posts/widgets/warningModal.html');
          }
        }

        function getReportPostList(){
            var params = {
              category : 2,
              limit : 99999
            }
            $http.post(ADMIN_VALUE.URL_REPORTS_LIST, params)
            .then(function(res){
              console.log(res);
                if (res.data.success === 'true') {
                    $scope.reportsDataList = res.data.result.reports;
                    $scope.reportsList = res.data.result.reports;
                } else {
                  $scope.reportsDataList = [];
                  $scope.reportsList = [];
                }
            }, function(res){

            });
        }
        function open(page, params, size){
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: page,
            size: size,
            controller: function($scope, $uibModalInstance){
                $scope.post = params;
                $scope.ok = function () {
                  getPendingPostList();
                  $uibModalInstance.close();
                };
                $scope.delete = function(){
                    $http.post(ADMIN_VALUE.URL_POSTS_ACTION, params)
                    .then(function(res){
                        if (res.data.success === 'true') {
                            getPendingPostList();
                            $uibModalInstance.close();
                        }
                    }, function(res){
                      $uibModalInstance.close();
                    });
                }
            },
            resolve: {
              items: function () {
                return $scope.items;
              }
            }
          });
          modalInstance.result.then(function(result){
            $scope.formData = {};
          });

        };
    }
})();
