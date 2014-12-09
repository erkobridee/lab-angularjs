(function() {
  'use strict';

  angular.module( 'app' ).directive( 'datagrid', datagrid );

  //---

  function datagrid() {

    var scope = {
      titles: '='
    };

    var directive = {
      restrict: 'A',
      scope: scope,
      replace: true,
      transclude: true,
      template: '<table border="1" ng-transclude></table>',
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc( scope, element ) {

      addThead();

      //---

      function addThead() {
        var thead = [ ];
        thead.push( '<thead><tr>' );

        for ( var i = 0; i < scope.titles.length; i++ ) {
          thead.push( '<th>', scope.titles[ i ], '</th>' );
        }

        thead.push( '</tr></thead>' );

        element.append( thead.join( '' ) );
      }

    }

  }

})();
