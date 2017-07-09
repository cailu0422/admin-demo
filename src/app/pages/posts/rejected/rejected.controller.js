(function() {
    'use strict';

    angular.module('BlurAdmin.pages.posts').controller('PostsRejectedController', PostsRejectedController);

    function PostsRejectedController($scope, $http, ADMIN_VALUE, $state, $uibModal) {
        var vm = this;
        $scope.selectedPost = [];
        $scope.postsDataList = [];
        $scope.smartTablePageSize = 10;
        getRejectedPostList();

        $scope.postDetail = function(post){
          console.log(post);
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

        function getRejectedPostList(){
            var params = {
              status : 4,
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
        function open(page, params){
          var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: page,
            controller: function($scope, $uibModalInstance){
                $scope.ok = function () {
                  getRejectedPostList();
                  $uibModalInstance.close();
                };
                $scope.delete = function(){
                    $http.post(ADMIN_VALUE.URL_POSTS_ACTION, params)
                    .then(function(res){
                        if (res.data.success === 'true') {
                            getRejectedPostList();
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
