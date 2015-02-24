define(function(require) {
  'use strict';

  var angular = require('angular');
  var module = require('./module');

  module.factory('MultiPagesService', MultiPagesService);

  //---

  MultiPagesService.$inject = ['$q', '$state', 'MultiPagesStorage', '$window']; //  TODO: remove $window

  function MultiPagesService( $q, $state, storage, $window ) {

    var currentPage = {
      stateName        : null,
      stateObject      : null,
      controllerObject : null,
      fieldsArray      : null,
      snapshotObject   : null
    };

    //---

    var service = {
      navto  : navto,
      get    : getPage,
      set    : setPage,
      show   : showPages,
      list   : listPages,
      remove : {
        page : removePage,
        all  : removeAllPages
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

    } // @end: navto

    function setPage( controllerObject, fieldsArray, snapshotObject ) {

      currentPage.stateName        = $state.current.name;
      currentPage.stateObject      = $state.current;
      currentPage.controllerObject = controllerObject;
      currentPage.fieldsArray      = fieldsArray;
      currentPage.snapshotObject   = snapshotObject;

      //---

      defineOnExitHandler( currentPage.stateObject );

      // TODO: remove
      console.log( Object.keys(snapshotObject) );
      console.log( snapshotObject );

      if( snapshotObject._defined_ ) {
        applySnapshotObject();
        removePage( currentPage.stateName )
          .then(function( pagesList ) {

            console.log( pagesList );

            while( pagesList.length > 0 ) {
              pagesList.pop();
            }

          });
      }

    } //@end: setPage


    function getPage( stateName ) {

      var msg = 'snapshot object from : ' + stateName + ' | ' + new Date();

      return storage
        .data
        .get( stateName )
        .then(function(value) {
          var output = value || {};
          output._defined_ = !!value;
          output._info_ = msg;
          return output;
        });

    } // end: getPage

    function showPages() {

      return collectAndStoreData()
        .then(function( results ) {

          // TODO: remove
          console.log( results );

          return listPages();

        });

    } // @end: showPages

    function listPages() {

      return storage
        .index
        .get()
        .then(function( indexObject ) {
          return indexObjectToArray( indexObject );
        });

    } // @end: listPages

    function removePage( stateName ) {

      return storage
        .data
        .remove( stateName ) // TODO: review
        .then(function( oldValue ) {

          // TODO: remove
          console.log( oldValue );

          return storage
            .index
            .get();
        })
        .then(function( indexObject ) {

          if( stateName in indexObject ) {
            delete indexObject[ stateName ];
          }

          return storage
            .index
            .set( indexObject );

        })
        .then(function( indexObject ) {

          // TODO: remove
          console.log( 'index object updated : ', indexObject );

          return indexObjectToArray( indexObject );

        });

    } // @end: removePage

    function removeAllPages() {

      return storage.clear();

    } //@end: removeAllPages

    //---

    // https://docs.angularjs.org/api/ng/function/angular.forEach
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
      if( !currentPage.stateName ) return;

      currentPage.stateName = null;
      currentPage.controllerObject = null;
      currentPage.snapshotObject = null;

      if( currentPage.fieldsArray ) {
        if( angular.isArray( currentPage.fieldsArray ) ) {
          while( currentPage.fieldsArray.length > 0 ) {
            currentPage.fieldsArray.pop();
          }
        }
        currentPage.fieldsArray = null;
      }

      if(currentPage.stateObject) {
        if(currentPage.stateObject.onExit) {
          removeOnExitHandler( currentPage.stateObject );
        }
        currentPage.stateObject = null;
      }

      currentPage = null;

      currentPage = {
        stateName        : null,
        stateObject      : null,
        controllerObject : null,
        fieldsArray      : null,
        snapshotObject   : null
      };
    }

    function defineOnExitHandler( state ) {

      // http://www.ng-newsletter.com/posts/angular-ui-router.html
      // https://github.com/angular-ui/ui-router/wiki#onenter-and-onexit-callbacks
      state.onExit = function() {

        console.log( 'currentStateObject === $state.current : ' + (currentPage.stateObject === $state.current) );
        console.log( $state.current );

        removeOnExitHandler( this );
        console.log( 'onExit : ', this, currentPage.controllerObject );

        collectAndStoreData()
          .then(function( results ) {

            // TODO: remove
            console.log( results );

            cleanUpCurrentPage();

          });

      };

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

      var snapshotIndex = getSnapshotIndexObject();
      console.log( 'snapshot index object: ', snapshotIndex );

      var indexPromise = storage
        .index
        .get()
        .then(function( indexObject ) {
          indexObject = indexObject || {};
          indexObject[currentPage.stateName] = snapshotIndex;
          return indexObject;
        })
        .then(function( indexObject ) {
          return storage.index.set( indexObject );
        })
        .then(function( savedObject ) {
          var msg = 'snapshot index object from < ' + currentPage.stateName + ' > - saved: ' + (savedObject[currentPage.stateName] === snapshotIndex);
          return msg;
        });


      var snapshot = getSnapshotObject();
      console.log( 'snapshot object: ', snapshot );

      var dataPromise = storage
        .data
        .set( currentPage.stateName, snapshot )
        .then(function( savedObject ) {
          var msg = 'snapshot object from < ' + currentPage.stateName + ' > - saved: ' + (snapshot === savedObject);
          return msg;
        });

      // https://code.angularjs.org/1.3.13/docs/api/ng/service/$q
      return $q.all([ indexPromise, dataPromise ]).then(function( results ) {

        snapshotIndex = null;
        snapshot = null;

        return results;
      });

    }

  }

});
