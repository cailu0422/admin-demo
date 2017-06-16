/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.home')
      .controller('HomePieChartCtrl', HomePieChartCtrl);

  /** @ngInject */
  function HomePieChartCtrl($scope, $timeout, baConfig, baUtil, $http, ADMIN_VALUE) {
    var pieColor = baUtil.hexToRGB(baConfig.colors.defaultText, 0.2);
    $scope.charts = [{
      color: pieColor,
      description: 'Posts',
      stats: $scope.counts.posts_count,
      icon: 'person',
    }, {
      color: pieColor,
      description: 'Reports',
      stats: $scope.counts.reports_count,
      icon: 'money',
    }, {
      color: pieColor,
      description: 'Users',
      stats: $scope.counts.user_count,
      icon: 'face',
    }
    ];

    function getData(){
      $scope.charts[0].stats = $scope.counts.posts_count;
      $scope.charts[1].stats = $scope.counts.reports_count;
      $scope.charts[2].stats = $scope.counts.user_count;
      // $http.post(ADMIN_VALUE.URL_USER_COUNT)
      //       .then(function(res){
      //           if (res.data.success === 'true') {
      //               $scope.charts[2].stats = res.data.result.count;
      //           }
      //       }, function(res){
      //           $scope.charts[2].stats = 'error';
      //       });
      //   $http.post(ADMIN_VALUE.URL_REPORTS_COUNT)
      //       .then(function(res){
      //           if (res.data.success === 'true') {
      //               $scope.charts[1].stats = res.data.result.count;
      //           }
      //       }, function(res){
      //           $scope.charts[1].stats = 'error';
      //       });
      //   $http.post(ADMIN_VALUE.URL_POSTS_COUNT)
      //       .then(function(res){
      //           if (res.data.success === 'true') {
      //               $scope.charts[0].stats = res.data.result.count;
      //           }
      //       }, function(res){
      //           $scope.charts[0].stats = 'error';
      //       });
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function loadPieCharts() {
      $('.chart').each(function () {
        var chart = $(this);
        chart.easyPieChart({
          easing: 'easeOutBounce',
          onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          },
          barColor: chart.attr('rel'),
          trackColor: 'rgba(0,0,0,0)',
          size: 84,
          scaleLength: 0,
          animation: 2000,
          lineWidth: 9,
          lineCap: 'round',
        });
      });

      $('.refresh-data').on('click', function () {
        updatePieCharts();
      });
    }

    function updatePieCharts() {
      $('.pie-charts .chart').each(function(index, chart) {
        $(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
      });
    }

    $timeout(function () {
      loadPieCharts();
      updatePieCharts();
      getData();
    }, 1000);
  }
})();