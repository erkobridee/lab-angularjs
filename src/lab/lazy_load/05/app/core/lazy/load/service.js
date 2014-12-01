define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory('LazyLoadService', LazyLoadService);

  //---

  LazyLoadService.$inject = ['$q', '$ocLazyLoad', '$state'];

  function LazyLoadService($q, ocLazyLoad, $state) {

    var service = {
      load: lazyLoad,
      state: lazyStateLoad
    };

    return service;

    //---

    function lazyLoad(toLoad) {

      if( angular.isString( toLoad ) ) {
        return loadOne( toLoad );
      } else if( angular.isArray( toLoad ) ) {
        return loadAll( toLoad );
      }

    }

    /*
    Angular $q
    https://docs.angularjs.org/api/ng/service/$q

    Angular forEach
    https://docs.angularjs.org/api/ng/function/angular.forEach

    Promises and design patterns in AngularJS | Xebia Blog
    http://blog.xebia.com/2014/02/23/promises-and-design-patterns-in-angularjs/
    */

    function loadAll(toLoadArray) {

      var promises = [];

      angular.forEach(toLoadArray, function createPromise( value ) {
        if( angular.isString( value ) ) this.push( loadOne( value ) );
      }, promises);

      return $q.all(promises);

    }

    function loadOne(name) {

      return ocLazyLoad.load({
        name: name,
        files: ['app/modules/'+ name +'/package'] // load
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
