(function() {
  'use strict';

  angular.module( 'app' ).controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    //---

    var series = [
      {
        name: 'Tokyo',
        data: [ 49.9, 71.5, 106.4, 129.2 ]
      },
      {
        name: 'New York',
        data: [ 83.6, 78.8, 98.5, 93.4 ]
      }
    ];

    var xAxis = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril'
    ];

    //---

    var optionsColumn = {
      title: 'Highcharts Column',
      xAxis: xAxis,
      series: series
    };

    var optionsLine = {
      title: 'Highcharts Line',
      xAxis: xAxis,
      series: series
    };

    var optionsArea = {
      title: 'Highcharts Area',
      xAxis: xAxis,
      series: series
    };

    //---

    var chart = {};
    chart.column = { options: optionsColumn };
    chart.line   = { options: optionsLine };
    chart.area   = { options: optionsArea };

    //---

    vm.chart = chart;

  }

})();
