(function () {
  'use strict';

  angular.module( 'app' ).directive('csSelect', csSelect);

  //---

  function csSelect() {

    var scope = {
      row: '=csSelect'
    };

    var directive = {
      require: '^stTable',
      template: '<input type="checkbox"/>',
      scope: scope,
      link: linkFunc
    };

    //---

    return directive;

    //---

    function linkFunc( scope, element, attrs, controller ) {

      element.bind( 'change', function ( evt ) {
        scope.$apply(function () {
            controller.select( scope.row, 'multiple' );
        });
      });

      scope.$watch('row.isSelected', function (newValue, oldValue) {
        if (newValue === true) {
          element.parent().addClass('st-selected');
        } else {
          element.parent().removeClass('st-selected');
        }
      });

    }

  }

})();
