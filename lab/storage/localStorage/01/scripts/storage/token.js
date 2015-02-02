(function() {
  'use strict';

  var module = angular.module(
    // module name
    'app.storage.token',

    // module dependencies
    [
      'angular-storage'
    ]
  );

  module.factory('TokenStorage', TokenStorage);

  //---

  TokenStorage.$inject = ['store'];

  function TokenStorage(store) {

    var service = {
      set: set,
      get: get,
      remove: remove
    };

    return service;

    //---

    function getDS() {
      return store.getNamespacedStore('TokenStorage');
    }

    function set( KEY, value ) {
      return getDS().set( KEY, value );
    }

    function get( KEY ) {
      return getDS().get( KEY );
    }

    function remove( KEY ) {
      return getDS().remove( KEY );
    }

  }

})();
