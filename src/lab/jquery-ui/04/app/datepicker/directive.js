(function() {
  'use strict';

  angular.module( 'app' ).directive( 'datepicker', datepicker );

  //---

  datepicker.$inject = [ '$parse' ];

  //---

  function datepicker( $parse ) {

    var directive = {
      restrict: 'E',
      compile: compile
    };

    return directive;

    //---

    function compile( element, attrs ) {
      var modelAccessor = $parse( attrs.ngModel );

      var html = '<input type="text" />';

      var newElem = $( html );
      element.replaceWith( newElem );

      return function ( scope, element, attrs, controller ) {

        var processChange = function () {
          var date = new Date( $( element ).datepicker( 'getDate' ) );

          scope.$apply(function ( scope ) {
            modelAccessor.assign( scope, date );
          });
        };

        $( element ).datepicker({
          dateFormat: 'dd/mm/yy',
          onClose: processChange,
          onSelect: processChange
        });

        scope.$watch( modelAccessor, function ( val ) {
          var date = new Date( val );
          $( element ).datepicker( 'setDate', date );
        });

      };

    }
  }
})();
