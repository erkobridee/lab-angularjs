(function() {
  'use strict';

  angular
    .module('app')
    .factory('ContentService', ContentService);

    //---

    ContentService.$inject = ['$http', 'DATA_URL'];

    function ContentService($http, urlprefix) {

      var service = {
        getData: getDataFn
      };

      //---

      function getDataFn() {
        return $http.get(urlprefix + 'content.json');
      }

      //---

      return service;

    }

})();
