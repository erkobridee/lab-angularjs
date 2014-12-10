(function() {
  'use strict';

  angular.module( 'app' ).directive( 'chartRadar', chartRadar );

  //---

  function chartRadar() {

    var scope = {
      labels: '=',
      datasets: '='
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      replace: true,
      template: '<canvas height="450" width="600"></canvas>',
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc( scope, element ) {

      var data = {
        labels: scope.labels,
        datasets: scope.datasets
      };

      var options = {
        responsive: true
      };

      var ctx = element[0].getContext( '2d' );

      //---

      new Chart( ctx ).Radar( data, options );
    }

  }

})();
