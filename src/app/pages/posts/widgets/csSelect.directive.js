(function () {
  'use strict';

  angular.module('BlurAdmin.pages.posts')
      .directive('csSelect', csSelect);

  /** @ngInject */
  function csSelect() {
    return {
            require: '^stTable',
            template: '<input type="checkbox"/>',
            scope: {
                row: '=csSelect',
                selectedList: '=selectedPost'
            },
            link: function (scope, element, attr, ctrl) {

                element.bind('click', function (evt){
                  evt.stopPropagation();
                });

                element.bind('change', function (evt) {
                    scope.$apply(function () {
                        ctrl.select(scope.row, 'multiple');
                    });
                });

                scope.$watch('row.isSelected', function (newValue, oldValue) {
                    if (newValue === true) {
                        element.parent().addClass('st-selected');
                        scope.selectedList.push(scope.row.post_id);
                    } else {
                        element.parent().removeClass('st-selected');
                        scope.selectedList.splice(scope.selectedList.indexOf(scope.row.post_id), 1);
                    }
                });
            }
        };
  }


})();
