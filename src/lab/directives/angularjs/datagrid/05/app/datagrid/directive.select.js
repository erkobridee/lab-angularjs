(function () {
  'use strict';

  angular.module( 'app' ).directive('select', select);

  //---

  select.$inject = [ '$rootScope' ];

  function select($rootScope) {

    var scope = {
      row: '=select'
    };

    var directive = {
      require: '^datagrid',
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
          controller.select( scope.row, element.find('input')[0].checked );
        });
      });

      //---

      scope.$watch('row.datatableSelected', function(value) {
        delete row.datatableSelected;
        element.find('input')[0].checked = value;
      });

      //---

      $rootScope.$on('datatable:selectAll', function onEvent(event, value) {
        event.preventDefault(); event.stopPropagation();
        element.find('input')[0].checked = value;
      });

    }

  }

})();
