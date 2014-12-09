(function() {
  'use strict';

  angular.module( 'app' ).directive( 'selectOne', selectOne );

  //---

  function selectOne() {

    var scope = {
      data: '=',
      selected: '=',
      value: '@'
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      link: linkFunc,
      templateUrl: 'app/selectone/template.html'
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
