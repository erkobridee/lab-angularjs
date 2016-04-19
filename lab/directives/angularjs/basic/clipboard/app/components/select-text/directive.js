(function() {
  'use strict';

  /*
    $element | AngularJS Docs
    https://docs.angularjs.org/api/ng/function/angular.element

    Accessing $document Properties In AngularJS | Ben Nadel
    http://www.bennadel.com/blog/2630-accessing-document-properties-in-angularjs.htm
  */

  function Directive( $window, $document ) {

    function postLink( scope, element, attrs ) {
      console.log(attrs);

      var mouseEvent = 'click';
      if(angular.isDefined(attrs.selectTextOnDoubleClick)){
        mouseEvent = 'dblclick';
      } else if(angular.isDefined(attrs.selectTextOnClick)){
        mouseEvent = 'click';
      }

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

      element.on( mouseEvent, onClick );

      scope.$on( '$destroy', function() {
        element.off( mouseEvent, onClick );
        mouseEvent = null;
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
    .module('components.selectText')
    .directive('selectText', Directive);

})();
