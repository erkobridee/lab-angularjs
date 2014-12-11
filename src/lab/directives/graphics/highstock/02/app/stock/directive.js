(function() {
  'use strict';

  angular.module( 'app' ).directive( 'stockChart', stockChart );

  //---

  function stockChart() {

    var scope = {
      title: '@',
      series: '='
    };

    var directive = {
      restrict: 'EA',
      scope: scope,
      replace: true,
      template: '<div></div>',
      link: linkFunc
    };

    return directive;

    //---

    function linkFunc(scope, element, attrs) {

      var chart = {
        alignTicks: false
      };

      var title = {
        text: scope.title || ''
      };

      var rangeSelector = {
        selected: 1
      };

      //---

      scope.$watch( 'series', function( value ) {
        init( value );
      });

      //---

      function init( series ) {
        var options = {
          chart: chart,
          title: title,
          rangeSelector: rangeSelector,
          series: series
        };

        $( element[0] ).highcharts( 'StockChart', options );

      }

    }

  }

})();
