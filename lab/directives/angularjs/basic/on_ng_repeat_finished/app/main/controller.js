(function() {
  'use strict';

  function Controller( $timeout, console, $scope ) {

    var vm = this;

    vm.isRenderFinished = false;
    vm.data = [];

    //---

    vm.onNgRepeatFinishedHandler = function() {
      console.log('ng repeater render finished');
    };

    vm.renderFinished = function(){
      vm.isRenderFinished = true;
    };

    vm.generateData = function(){
      vm.isRenderFinished = false;
      var i = vm.data.length;
      var max = (i+100);
      for(;i<max;i++){
        vm.data.push('value : ' + (i+1));
      }
      max = null;
      i = null;
    };

    // generate 2 set of data
    vm.generateDataDelayed = function(){
      vm.generateData();
      $timeout(function(){
        vm.generateData();
      }, 500); // delay 500ms
    };

    //---
    (function init(){
      vm.generateDataDelayed();

      //---

      var onNgRepeatFinishedListerner = $scope.$on(
        'ngRepeatFinished', vm.onNgRepeatFinishedHandler
      );

      //---

      $scope.$on('$destroy', function(){
        onNgRepeatFinishedListerner();
        onNgRepeatFinishedListerner = null;
      });
    })();
  }

  Controller.$inject = [ '$timeout', '$log', '$scope' ];

  //---

  angular
    .module( 'app' )
    .controller( 'MainCtrl', Controller );

})();
