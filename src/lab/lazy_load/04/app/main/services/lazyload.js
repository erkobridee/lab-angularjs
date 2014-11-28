define(function(require) {
  'use strict';

  var module = require('../module');

  module.factory('LazyLoadService', LazyLoadService);

  //---

  LazyLoadService.$inject = ['$ocLazyLoad', '$state'];

  function LazyLoadService(ocLazyLoad, $state) {

    var service = {
      load: lazyLoad,
      state: lazyStateLoad
    };

    return service;

    //---

    function lazyLoad(name) {

      return ocLazyLoad.load({
        name: name,
        files: ['app/'+ name +'/package'] // load
      });

    }

    function lazyStateLoad(name) {
      return lazyLoad(name)
        .then(function() {
          return $state.go(name);
        });
    }

  }

});
