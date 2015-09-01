(function() {
  'use strict';

  /*
    $element | AngularJS Docs
    https://docs.angularjs.org/api/ng/function/angular.element

    Accessing $document Properties In AngularJS | Ben Nadel
    http://www.bennadel.com/blog/2630-accessing-document-properties-in-angularjs.htm
  */

  function Directive( $window, $document ) {

    function postLink( scope, element ) {

      function onClick(){
        var range;
        var doc0 = $document[0];
        var el0 = element[0];
        if( $document.selection ) {
          range = doc0.body.createTextRange();
          range.moveToElementText( el0 );
          range.select();
        } else if( $window.getSelection ) {
          range = doc0.createRange();
          range.selectNode( el0 );
          $window.getSelection().addRange( range );
        }
      }

      element.on( 'click', onClick );

      scope.$on( 'destroy', function() {
        element.off( 'click', onClick );
      });
    }

    //---

    var directive = {
      restrict : 'A',
      link : postLink
    };

    return directive;

  }

  Directive.$inject = [ '$window', '$document' ];

  //---

  angular
    .module('components.selectTextOnclick')
    .directive('selectTextOnclick', Directive);

})();
