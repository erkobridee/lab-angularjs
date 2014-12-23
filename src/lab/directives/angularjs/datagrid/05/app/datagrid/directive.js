(function() {
  'use strict';

  angular.module( 'app' ).directive( 'datagrid', datagrid );

  //---

  function datagrid() {

    var scope = {
      data: '=datagrid',
      selectedValues: '='
    };

    //---

    var directive = {
      restrict: 'A',
      scope: scope,
      controller: 'DatagridCtrl',
      controllerAs: 'vm'
    };

    return directive;

  }

})();
