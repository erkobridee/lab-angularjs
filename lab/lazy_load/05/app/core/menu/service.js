define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory('MenuService', MenuService);

  //---

  MenuService.$inject = ['$rootScope'];

  function MenuService($rootScope) {

    var localItems = [];

    var service = {
      items: localItems,
      add: addMenu
    };

    return service;

    //---

    function addMenu( config ) {

      // TODO: check config attributes
      /*
      config: {
        label: 'labelName',
        state: 'gotoState'
      }
      */

      console.log( config );

      localItems.push( config );
    }

  }

});
