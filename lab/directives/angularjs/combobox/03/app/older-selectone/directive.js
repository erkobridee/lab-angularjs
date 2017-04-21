(function() {
  'use strict';

  angular.module( 'app' ).directive( 'olderSelectOne', selectOne );

  //---

  function selectOne() {

    var scope = {
      data: '=',
      selected: '=',
      value : '@'
    };

    var directive = {
      restrict: 'E',
      scope: scope,
      link: linkFunc,
      templateUrl: 'app/older-selectone/template.html'
    };

    return directive;

    //--

    function linkFunc(scope, element, attrs) {

      scope.$watch('data', function() {
        scope.selected = '';
      });

    }

  }

})();
