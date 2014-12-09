(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ '$scope' ];

  function MainCtrl($scope) {
    var vm = this;

    vm.date = undefined;

    //---

    $( '#datepicker' ).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: selectDatepicker
    });

    //---

    function selectDatepicker(date) {
      $scope.$apply(function() {
        vm.date = date;
      });
    }

  }

})();
