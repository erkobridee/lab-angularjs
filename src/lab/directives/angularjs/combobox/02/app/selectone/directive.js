(function() {
  'use strict';

  angular.module( 'app' ).directive( 'selectOne', selectOne );

  //---

  function selectOne() {

    var scope = {
      data: '=',
      selected: '='
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      templateUrl: 'app/selectone/template.html'
    };

    return directive;

  }

})();
