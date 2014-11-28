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

    /*
    Angular $q
    https://docs.angularjs.org/api/ng/service/$q

    Promises and design patterns in AngularJS | Xebia Blog
    http://blog.xebia.com/2014/02/23/promises-and-design-patterns-in-angularjs/
    */

    function lazyLoad(name) {

      return ocLazyLoad.load({
        name: name,
        files: ['app/'+ name +'/package'] // load
      });

    }

    function lazyStateLoad(name) {

      return lazyLoad(name)
        .then(function() {  // After load
          return $state.go(name);
        });

    }

  }

});
