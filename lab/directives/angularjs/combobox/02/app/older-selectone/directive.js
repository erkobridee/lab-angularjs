(function() {
  'use strict';

  angular.module( 'app' ).directive( 'olderSelectOne', selectOne );

  //---

  function selectOne() {

    var scope = {
      data: '=',
      selected: '='
    };

    var directive = {
      restrict: 'E',
      scope: scope,
      templateUrl: 'app/older-selectone/template.html'
    };

    return directive;

  }

})();
