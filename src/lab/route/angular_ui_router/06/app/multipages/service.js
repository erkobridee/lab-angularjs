define(function(require) {
  'use strict';

  var angular = require('angular');
  var module = require('./module');

  module.factory('MultiPagesService', MultiPagesService);

  //---

  MultiPagesService.$inject = ['$q', '$state', 'MultiPagesStorage', '$window']; //  TODO: remove $window

  function MultiPagesService( $q, $state, storage, $window ) {

    // TODO: review
    var currentPage = {
      stateName        : null,
      stateObject      : null,
      controllerObject : null,
      fieldsArray      : null,
      snapshotObject   : null
    };

    //---

    var service = {
      navto: navto,
      get: getPage,
      set: setPage, // TODO: review
      // TODO: create show service?
      list: listPages, // TODO: review
      remove: {
        page: removePage,
        all: removeAllPages
      }
    };

    // TODO: remove
    $window.multipages = $window.multipages  || {};
    $window.multipages.service = service;

    return service;

    //---

    function navto( stateName ) {
      cleanUpCurrentPage();
      $state.go( stateName );
    }

    /*
    function setPage( currentStateObject, controllerObject, fieldsArray, snapshotObject ) {
      var currentStateName = currentStateObject.name;

      // TODO: review
      console.log( 'currentStateObject === $state.current : ' + (currentStateObject === $state.current) );
      console.log( $state.current );

      console.log( 'current state : ', currentStateObject );
      console.log( 'controller: ', controllerObject );

      applySnapshotObject();

      // TODO: remove old if exists?


      //---

      // http://www.ng-newsletter.com/posts/angular-ui-router.html
      // https://github.com/angular-ui/ui-router/wiki#onenter-and-onexit-callbacks
      currentStateObject.onExit = function() {

        console.log( 'currentStateObject === $state.current : ' + (currentStateObject === $state.current) );
        console.log( $state.current );

        removeOnExitHandler( this );
        console.log( 'onExit : ', this, controllerObject );

        var snapshotIndex = getSnapshotIndexObject();
        console.log( 'snapshot index object: ', snapshotIndex );

        var snapshot = getSnapshotObject();
        console.log( 'snapshot object: ', snapshot );

        var indexPromise = storage
          .index
          .get()
          .then(function(indexObject) {
            indexObject = indexObject || {};
            indexObject[currentStateName] = snapshotIndex;
            return indexObject;
          })
          .then(function( indexObject ) {
            return storage.index.set( indexObject );
          })
          .then(function( savedObject ) {
            var msg = 'snapshot index object from < ' + currentStateName + ' > - saved: ' + (savedObject[currentStateName] === snapshotIndex);
            // console.log( msg );
            return msg;
          });

        var dataPromise = storage
          .data
          .set( currentStateName, snapshot )
          .then(function( savedObject ) {
            var msg = 'snapshot object from < ' + currentStateName + ' > - saved: ' + (snapshot === savedObject);
            // console.log( msg );
            return msg;
          });

        // https://code.angularjs.org/1.3.13/docs/api/ng/service/$q
        $q.all([ indexPromise, dataPromise ]).then(function( results ) {

          // TODO: remove
          console.log(results);

          snapshotIndex = null;
          snapshot = null;
        });
      };

      function removeOnExitHandler( state ) {
        state.onExit = null;
        delete state.onExit;
      }

      //---

      function getSnapshotIndexObject() {
        var snapshotIndex = {};

        snapshotIndex._t = new Date().getTime();
        snapshotIndex.state = currentStateName;
        if( controllerObject.title ) snapshotIndex.title = controllerObject.title;

        // TODO: take and resize(?) screenshot
        snapshotIndex.screenshot = 'not available';

        return snapshotIndex;
      }

      function getSnapshotObject() {
        var snapshot = {};
        var len = fieldsArray.length;
        if(len > 0) snapshot._t = new Date().getTime();
        for (var i = len - 1; i >= 0; i--) {
          var field = fieldsArray[i];
          snapshot[field] = controllerObject[field];
        }
        return snapshot;
      }

      function applySnapshotObject() {
        if( angular.isObject( snapshotObject ) ) {
          for (var i = fieldsArray.length - 1; i >= 0; i--) {
            var field = fieldsArray[i];
            var value = snapshotObject[field];
            if(value) {
              if( angular.isObject(value) ) {
                // https://docs.angularjs.org/api/ng/function/angular.extend
                angular.extend(controllerObject[field], value);
              } else {
                controllerObject[field] = value;
              }
            }
          }
        }
      }

    } //@end: setPage
    */

    function setPage( currentStateObject, controllerObject, fieldsArray, snapshotObject ) {
      currentPage.stateName        = $state.current.name;
      currentPage.stateObject      = $state.current;
      currentPage.controllerObject = controllerObject;
      currentPage.fieldsArray      = fieldsArray;
      currentPage.snapshotObject   = snapshotObject;
      //---

      var currentStateName = currentStateObject.name;

      // TODO: review
      console.log( 'currentStateObject === $state.current : ' + (currentStateObject === $state.current) );
      console.log( $state.current );

      console.log( 'current state : ', currentStateObject );
      console.log( 'controller: ', controllerObject );

      applySnapshotObject();

      // TODO: remove old if exists?


      //---

      // http://www.ng-newsletter.com/posts/angular-ui-router.html
      // https://github.com/angular-ui/ui-router/wiki#onenter-and-onexit-callbacks
      currentStateObject.onExit = function() {

        console.log( 'currentStateObject === $state.current : ' + (currentStateObject === $state.current) );
        console.log( $state.current );

        removeOnExitHandler( this );
        console.log( 'onExit : ', this, controllerObject );


        var snapshotIndex = getSnapshotIndexObject();
        console.log( 'snapshot index object: ', snapshotIndex );

        var indexPromise = storage
          .index
          .get()
          .then(function( indexObject ) {
            indexObject = indexObject || {};
            indexObject[currentStateName] = snapshotIndex;
            return indexObject;
          })
          .then(function( indexObject ) {
            return storage.index.set( indexObject );
          })
          .then(function( savedObject ) {
            var msg = 'snapshot index object from < ' + currentStateName + ' > - saved: ' + (savedObject[currentStateName] === snapshotIndex);
            return msg;
          });


        var snapshot = getSnapshotObject();
        console.log( 'snapshot object: ', snapshot );

        var dataPromise = storage
          .data
          .set( currentStateName, snapshot )
          .then(function( savedObject ) {
            var msg = 'snapshot object from < ' + currentStateName + ' > - saved: ' + (snapshot === savedObject);
            return msg;
          });

        // https://code.angularjs.org/1.3.13/docs/api/ng/service/$q
        $q.all([ indexPromise, dataPromise ]).then(function( results ) {

          // TODO: remove
          console.log( results );

          snapshotIndex = null;
          snapshot = null;
        });
      };

    } //@end: setPage


    function getPage( stateName ) {

      // TODO: review
      var msg = 'snapshot object from : ' + stateName + ' | ' + new Date(); //.toUTCString();

      return storage
        .data
        .get( stateName ) // TODO: update index | remove object from storage?
        .then(function(value) {
          var output = value || {};
          output._info_ = msg;

          // TODO: remove
          console.log( 'storage - ' + stateName + ' : ',  value );
          console.log( msg );

          return output;
        });

    } // end: getPage


    // https://docs.angularjs.org/api/ng/function/angular.forEach
    function listPages() {

      return storage
        .index
        .get()
        .then(function( indexObject ) {
          return indexObjectToArray( indexObject );
        });

    }

    function removePage( stateName ) {
      // TODO: remove
      console.log( 'TODO: define removePage - ' + stateName );

      return storage
        .data
        .remove( stateName )
        .then(function( oldValue ) {

          // TODO: remove
          console.log( oldValue );

          return storage
            .index
            .get();
        })
        .then(function( indexObject ) {

          // TODO: remove
          console.log( angular.copy( indexObject ) );

          if( stateName in indexObject ) {
            delete indexObject[ stateName ];
          }

          // TODO: remove
          console.log( angular.copy( indexObject ) );

          return storage
            .index
            .set( indexObject );

        })
        .then(function( indexObject ) {

          console.log( 'index object updated : ', indexObject );

          return indexObjectToArray( indexObject );

        });

    }

    function removeAllPages() {

      return storage.clear();

    }

    //---

    function indexObjectToArray( indexObject ) {
      var pages = [];
      angular.forEach(indexObject, function(value, key) {
        this.push( value );
      }, pages);

      // TODO: remove
      console.log( 'indexObject: ', indexObject );
      console.log( 'pages: ', pages );

      return pages;
    }

    function cleanUpCurrentPage() {
        currentPage.stateName = null;
        currentPage.controllerObject = null;
        currentPage.fieldsArray = null;
        currentPage.snapshotObject = null;

        if(currentPage.stateObject) {
          if(currentPage.stateObject.onExit) {
            removeOnExitHandler( currentPage.stateObject );
          }
          currentPage.stateObject = null;
        }
    }

    function removeOnExitHandler( state ) {
      state.onExit = null;
      delete state.onExit;
    }

    // TODO: review and add promise
    function applySnapshotObject() {
      if( angular.isObject( currentPage.snapshotObject ) ) {
        for (var i = currentPage.fieldsArray.length - 1; i >= 0; i--) {
          var field = currentPage.fieldsArray[i];
          var value = currentPage.snapshotObject[field];
          if(value) {
            if( angular.isObject(value) ) {
              // https://docs.angularjs.org/api/ng/function/angular.extend
              angular.extend(currentPage.controllerObject[field], value);
            } else {
              currentPage.controllerObject[field] = value;
            }
          }
        }
      }
    }

    // TODO: review and add promise
    function getSnapshotObject() {
      var snapshot = {};
      var len = currentPage.fieldsArray.length;
      if(len > 0) snapshot._t = new Date().getTime();
      for (var i = len - 1; i >= 0; i--) {
        var field = currentPage.fieldsArray[i];
        snapshot[field] = currentPage.controllerObject[field];
      }
      return snapshot;
    }

    // TODO: review and add promise
    function getSnapshotIndexObject() {
      var snapshotIndex = {};

      snapshotIndex._t = new Date().getTime();
      snapshotIndex.state = currentPage.stateName;
      if( currentPage.controllerObject.title ) {
        snapshotIndex.title = currentPage.controllerObject.title;
      }

      // TODO: take and resize(?) screenshot
      snapshotIndex.screenshot = 'not available';

      return snapshotIndex;
    }

    function takeScreenshotAndResize() {
      var deferred = $q.defer();

      // TODO: define code to take and resize (250 x 200 px) screenshot

      deferred.resolve( 'not available' );

      return deferred.promise;
    }

    // TODO: review
    function collectAndStoreData() {

      // TODO: define code

    }

  }

});
