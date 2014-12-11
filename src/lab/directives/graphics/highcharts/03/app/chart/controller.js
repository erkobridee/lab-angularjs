(function() {
  'use strict';

  angular.module( 'app' ).controller( 'ChartCtrl', ChartCtrl );

  //---

  function ChartCtrl() {
    var vm = this;

    vm.init = init;

    //---

    function init( el, type, opt ) {
      var options = getCommomOptions( type, opt );

      if( type === 'column' ) {

        initColumn( el, options );

      } else if( type === 'line' ) {

        initLine( el, options );

      } else if( type === 'area' ) {

        initArea( el, options );

      } else {
        console.error( 'Invalid type', type );
      }

    }

    //---

    function initLine( element, options ) {
      $( element ).highcharts( options );
    }

    function initArea( element, options ) {
      $( element ).highcharts( options );
    }

    function initColumn( element, options ) {
      $( element ).highcharts( options );
    }

    //---

    function getCommomOptions( type, options ) {
      options = options || {};
      options.yAxis = options.yAxis || {};

      //---

      var chart = {
        type: type
      };

      //---

      var title = {
        text: options.title
      };

      var subtitle = {
        text: options.subtitle
      };

      //--

      var xAxis = {
        categories: options.xAxis || []
      };

      var yAxis = {
        min: options.yAxis.min || 0,
        title: {
          text: options.yAxis.title
        }
      };

      //---

      var tooltip = options.tooltip || {};
      var series = options.series || [];

      //---

      return {
        chart: chart,
        title: title,
        subtitle: subtitle,
        xAxis: xAxis,
        yAxis: yAxis,
        tooltip: tooltip,
        series: series
      };

    }

  }

})();
