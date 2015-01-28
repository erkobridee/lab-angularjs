(function() {
  'use strict';

  var module = angular.module(
    // module name
    'app.storage.data',

    // module dependencies
    [
      'LocalForageModule'
    ]
  );

  module.factory('DataStorage', DataStorage);

  //---

  DataStorage.$inject = ['$localForage'];

  function DataStorage($localForage) {

    var service = {
      ds: null
    };

    (function() {
      if(!service.ds) {
        service.ds = $localForage.createInstance({
          name: 'data'
        });
      }
    })();

    return service;

  }

})();
