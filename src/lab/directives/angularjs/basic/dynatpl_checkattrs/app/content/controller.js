(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContentCtrl', ContentCtrl);

    //---

    ContentCtrl.$inject = ['ContentService'];

    function ContentCtrl(service) {
      var vm = this;

      vm.data = [];

      vm.fetchData = fetchDataFn;

      //---

      function fetchDataFn() {
        service
          .getData()
          .then(function(result) {
            vm.data = result.data;
          });
      }

      fetchDataFn();
    }

})();
