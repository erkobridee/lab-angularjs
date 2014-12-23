(function () {
  'use strict';

  angular.module( 'app' ).directive('selectAll', selectAll);

  //---

  selectAll.$inject = [ '$rootScope' ];

  function selectAll($rootScope) {

    var directive = {
      require: '^datagrid',
      template: '<input type="checkbox"/>',
      link: linkFunc
    };

    //---

    return directive;

    //---

    function linkFunc( scope, element, attrs, controller ) {

      element.bind( 'change', function ( evt ) {
        scope.$apply(function () {
          controller.selectAll( element.find('input')[0].checked );
        });
      });

      //---

      $rootScope.$on('datatable:allSelected', function (event, value) {
        event.preventDefault(); event.stopPropagation();
        element.find('input')[0].checked = value;
      });

    }

  }

})();
