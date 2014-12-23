(function() {
  'use strict';

  angular.module('app').controller('DatagridCtrl', DatagridCtrl);

  //---

  DatagridCtrl.$inject = [ '$scope' ];

  function DatagridCtrl($scope) {
    var vm = this;

    //---

    $scope.data = $scope.data || [];
    $scope.selectedValues = $scope.selectedValues || [];

    vm.select = select;
    vm.selectAll = selectAll;

    //---

    function selectAll( value ) {
      $scope.$emit('datatable:selectAll', value);

      if (value === false) {
        $scope.selectedValues = [];
        return;
      }

      for(var i = 0; i < $scope.data.length; i++) {
        var contains = ~$scope.selectedValues.indexOf($scope.data[i]);
        if(!contains) {
          $scope.selectedValues.push($scope.data[i]);
        }
      }
    }

    function select( row, value ) {
      var $index = $scope.data.indexOf(row);
      var selectedIndex = $scope.selectedValues.indexOf(row);

      if (value === true && selectedIndex < 0) {
        $scope.selectedValues.push(row);
      } else if (value === false && selectedIndex >= 0) {
        $scope.selectedValues.splice(selectedIndex, 1);
      }

      row.datatableSelected = value;

      var allSelected = ($scope.selectedValues.length === $scope.data.length);
      $scope.$emit('datatable:allSelected', allSelected);
    }

  }

})();
