(function() {
    'use strict';

    angular.module('BlurAdmin.pages.posts').controller('PostsPendingController', PostsPendingController);

    function PostsPendingController($scope, $http, ADMIN_VALUE, $state, $uibModal) {
        var vm = this;
        $scope.selectedPost = [];
        $scope.postsDataList = [];
        $scope.smartTablePageSize = 10;
        getPendingPostList();

        $scope.postDetail = function(post){
          console.log(post);
          
          open('app/pages/posts/widgets/detailModal.html', post, 'lg');
        }

        $scope.publishPost = function(){
          //action mark status 3
            var post_id = $scope.selectedPost.join(',');
            if (post_id){
              var params = {
                action : 'mark',
                status : 3,
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
        $scope.rejectPost = function(){
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
        $scope.deletePost = function(){
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

        function getPendingPostList(){
            var params = {
              status : 1,
              limit : 99999
            }
            $http.post(ADMIN_VALUE.URL_POSTS_LIST, params)
            .then(function(res){
                if (res.data.success === 'true') {
                    $scope.postsDataList = res.data.result.posts;
                    $scope.postsList = res.data.result.posts;
                } else {
                  $scope.postsDataList = [];
                  $scope.postsList = [];
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
