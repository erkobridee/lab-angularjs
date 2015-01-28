(function() {
  'use strict';

  var module = angular.module(
    // module name
    'app.storage.token',

    // module dependencies
    [
      'LocalForageModule'
    ]
  );

  module.factory('TokenStorage', TokenStorage);

  //---

  TokenStorage.$inject = ['$localForage'];

  function TokenStorage($localForage) {

    var service = {
      ds: null
    };

    (function() {
      if(!service.ds) {
        service.ds = $localForage.createInstance({
          name: 'token'
        });
      }
    })();

    return service;

  }

})();
