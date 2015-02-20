define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory('MultiPagesStorage', MultiPagesStorage);

  //---

  MultiPagesStorage.$inject = ['$localForage'];

  function MultiPagesStorage($localForage) {

    var ds;

    (function() {
      if(!ds) {
        ds = $localForage.createInstance({
          name: 'MultiPages'
        });
      }
    })();

    var INDEX_KEY = 'index';

    //---

    var service = {
      index: {
        set: setIndex,
        get: getIndex,
        remove: removeIndex
      },
      data: {
        set: setData,
        get: getData,
        remove: removeData
      },
      clear: clear
    };

    return service;

    //---

    function clear() {
      return ds.clear();
    }

    //---
    // @begin: index
    function setIndex( value )  {
      return setData( INDEX_KEY, value );
    }

    function getIndex() {
      return getData( INDEX_KEY );
    }

    function removeIndex() {
      return removeData( INDEX_KEY );
    }
    // @end: index
    //---
    // @begin: data
    function setData( key, value  ) {
      return ds
        .setItem( key, value )
        .then(function() {
          return value;
        });
    }

    function getData( key ) {
      return ds
        .getItem( key )
        .then(function( value ) {
          return value;
        });
    }

    function removeData( key ) {
      return ds
        .pull( key )
        .then(function( value ) {
          return value;
        });
    }
    // end: data
    //---

  }

});
