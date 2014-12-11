(function() {
  'use strict';

  angular.module( 'app' ).directive( 'chartArea', chartArea );

  //---

  function chartArea() {
    var directive = {
      restrict: 'EA',
      replace: true,
      scope: { options: '=' },
      template: '<div></div>',
      link: linkFunc,
      controller: 'ChartCtrl',
      controllerAs: 'vm'
    };

    return directive;

    //---

    function linkFunc( scope, element, attrs, controller ) {

      controller.init( element[0], 'area', scope.options );

    }

  }

})();
