(function() {
  'use strict';

  var module = angular.module(
    // module name
    'app.storage.data',

    // module dependencies
    [
      'angular-storage'
    ]
  );

  module.factory('DataStorage', DataStorage);

  //---

  DataStorage.$inject = ['store'];

  function DataStorage(store) {

    var service = {
      set: set,
      get: get,
      remove: remove
    };

    return service;

    //---

    function getDS() {
      return store.getNamespacedStore('DataStorage');
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
