(function() {
  'use strict';

  /*
    based on: github - omichelsen/angular-clipboard
    https://github.com/omichelsen/angular-clipboard

    Browser support: Chrome 43+, Firefox 41+, Opera 29+ and IE10+
  */

  function Directive( $clipboard, console ) {

    function postLink( scope, element ) {

      function onClick() {
          try{
            $clipboard.directiveCopyText( scope.text );
            console.log('copied to clipboard');
            if( scope.onCopied ) {
              scope.onCopied();
            }
          } catch( error ) {
            console.log('clipboard copy failed');
            if( scope.onError ) {
              scope.onError( { error: error } );
            }
          }
      }

      element.on( 'click', onClick );

      scope.$on( 'destroy', function() {
        element.off( 'click', onClick );
      });
    }

    var scope = {
      text: '=clipboardText', // required
      onCopied: '&?clipboardOncopied', // optional
      onError: '&?clipboardOnerror' // optional
    };

    var directive = {
      restrict : 'A',
      scope: scope,
      link : postLink
    };

    return directive;

  }

  Directive.$inject = [ '$clipboard', '$log' ];

  //---

  angular
    .module('components.clipboard')
    .directive('clipboard', Directive);

})();
