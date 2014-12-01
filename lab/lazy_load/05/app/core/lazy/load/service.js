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

    function lazyLoad( toLoad ) {

      if( angular.isArray( toLoad ) ) {
        return loadAll( toLoad );
      } else {
        return loadOne( toLoad );
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

    function loadAll( toLoadArray ) {

      var promises = [];

      angular.forEach(toLoadArray, function createPromise( value ) {
        this.push( loadOne( value ) );
      }, promises);

      return $q.all( promises );

    }

    function loadOne( toLoad, returnName ) {

      var promise = null;
      var name = null;

      if( angular.isString( toLoad ) ) {

        name = toLoad;
        promise = load( toLoad );

      } else if( angular.isObject( toLoad ) ) {

        // TODO: check attributes
        /*
          toLoad: {
            name: 'packageName',
            path: 'packagePath'
          }
        */

        name = toLoad.name;
        promise = load( toLoad.name, toLoad.path );
      }

      if( returnName ) {

        promise = promise.then(function() {
          return name;
        });

      }

      return promise;

    }

    function load( name, path ) {

      path = path || 'app/modules/';
      var packageFile = path + name + '/package';

      return ocLazyLoad.load({
        name: name,
        files: [ packageFile ] // load
      });

    }

    //---

    function lazyStateLoad( toLoad ) {

      return loadOne( toLoad, true )
        .then(function( gotoState ) { // After load
          return $state.go( gotoState );
        });

    }

  }

});
