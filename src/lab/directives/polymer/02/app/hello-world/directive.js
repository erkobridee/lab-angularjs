(function() {
  'use strict';

  angular.module( 'app' ).directive( 'helloWorld', helloWorld );

  //---

  function helloWorld() {

    var scope = {
      name: '='
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      link: linkFunc,
      templateUrl: 'app/hello-world/template.html'
    };

    return directive;

    //---

    function linkFunc( scope, element, attrs ) {

      init();

      //---

      scope.$watch( 'name', function( value ) {
        element[0].name = value;
      });

      //---

      function init() {
        new Polymer( 'hello-world', {} );
      }

    }

  }

})();
