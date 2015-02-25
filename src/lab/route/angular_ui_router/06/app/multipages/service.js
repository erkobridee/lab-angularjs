define(function(require) {
  'use strict';

  var angular = require('angular');
  var module = require('./module');

  var screenshot = require('./lib/screenshot');


  module.factory('MultiPagesService', MultiPagesService);

  //---

  MultiPagesService.$inject = ['$q', '$state', 'MultiPagesStorage' ];

  function MultiPagesService( $q, $state, storage ) {

    var currentPage = {
      stateName        : null,
      stateObject      : null,
      controllerObject : null,
      fieldsArray      : null,
      snapshotObject   : null
    };

    //---

    var service = {
      navto         : navto,
      get           : getPage,
      set           : setPage,
      list          : listPages,
      prepareToShow : prepareToShowPages,
      remove : {
        page : removePage,
        all  : removeAllPages
      }
    };

    return service;

    //---

    function navto( stateName ) {

      cleanUpCurrentPage();
      $state.go( stateName );

    } // @end: navto

    function setPage( controllerObject, fieldsArray ) {

      currentPage.stateName        = $state.current.name;
      currentPage.stateObject      = $state.current;
      currentPage.controllerObject = controllerObject;
      currentPage.fieldsArray      = fieldsArray;

      //---

      defineOnExitHandler( currentPage.stateObject );

      getPage( currentPage.stateName )
        .then(function( snapshotObject ) {

          currentPage.snapshotObject   = snapshotObject;

          // TODO: remove
          console.log( 'setPage > getPage : ', Object.keys(snapshotObject) );
          console.log( 'setPage > getPage : ', snapshotObject );

          if( snapshotObject._defined_ ) {
            applySnapshotObject();
            removePage( currentPage.stateName )
              .then(function( pagesList ) {

                // TODO: remove
                console.log( 'setPage > getPage > removePage : ', currentPage.stateName, pagesList );

                while( pagesList.length > 0 ) {
                  pagesList.pop();
                }

              });
          }

        });

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

    function listPages() {

      return storage
        .index
        .get()
        .then(function( indexObject ) {
          return indexObjectToArray( indexObject );
        });

    } // @end: listPages

    function prepareToShowPages() {

      var promise;

      if( currentPage.stateName ) {
        promise = collectAndStoreData()
          .then(function( results ) {

            // TODO: remove
            console.log( 'prepareToShowPages > collectAndStoreData :', results );

            return listPages();

          });
      } else {
        promise = listPages();
      }

      return promise;

    } // @end: prepareToShowPages

    function removePage( stateName ) {

      return storage
        .data
        .remove( stateName )
        .then(function( oldValue ) {

          // TODO: remove
          console.log( 'removePage : ', stateName, oldValue );

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

    //==========================================================================

    // https://docs.angularjs.org/api/ng/function/angular.forEach
    function indexObjectToArray( indexObject ) {

      var pages = [];
      angular.forEach( indexObject, function( value, key ) {
        this.push( value );
      }, pages );

      // TODO: remove
      console.log( 'indexObject: ', indexObject );
      console.log( 'pages: ', pages );

      return pages;

    } // @end: indexObjectToArray

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

      if( currentPage.stateObject ) {
        if( currentPage.stateObject.onExit ) {
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

    } // @end: cleanUpCurrentPage

    function defineOnExitHandler( state ) {

      // http://www.ng-newsletter.com/posts/angular-ui-router.html
      // https://github.com/angular-ui/ui-router/wiki#onenter-and-onexit-callbacks
      state.onExit = function() {

        removeOnExitHandler( this );

        // TODO: remove
        console.log( 'defineOnExitHandler > onExit : ', 'currentStateObject === $state.current : ' + (currentPage.stateObject === $state.current) );
        console.log( 'defineOnExitHandler > onExit : ', $state.current );
        console.log( 'defineOnExitHandler > onExit : ', this, currentPage.controllerObject );

        collectAndStoreData()
          .then(function( results ) {

            // TODO: remove
            console.log( results );

            cleanUpCurrentPage();

          });

      };

    } // @end: defineOnExitHandler

    function removeOnExitHandler( state ) {

      state.onExit = null;
      delete state.onExit;

    } // @end: removeOnExitHandler

    function applySnapshotObject() {

      if( angular.isObject( currentPage.snapshotObject ) ) {
        for (var i = currentPage.fieldsArray.length - 1; i >= 0; i--) {
          var field = currentPage.fieldsArray[ i ];
          var value = currentPage.snapshotObject[ field ];
          if(value) {
            if( angular.isObject( value ) ) {
              // https://docs.angularjs.org/api/ng/function/angular.extend
              angular.extend( currentPage.controllerObject[ field ], value );
            } else {
              currentPage.controllerObject[ field ] = value;
            }
          }
        }
      }

    } // @end: applySnapshotObject

    function getSnapshotObject() {

      // https://code.angularjs.org/1.3.13/docs/api/ng/service/$q
      var deferred = $q.defer();

      var snapshot = {};
      var len = currentPage.fieldsArray.length;
      if( len > 0 ) snapshot._t = new Date().getTime();
      for (var i = len - 1; i >= 0; i--) {
        var field = currentPage.fieldsArray[ i ];
        snapshot[ field ] = currentPage.controllerObject[field];
      }

      deferred.resolve( snapshot );

      return deferred.promise;

    } // @end: getSnapshotObject

    function getSnapshotIndexObject() {

      return takeScreenshotAndResize()
        .then(function( pngDataUrl ) {

          var snapshotIndex = {};

          snapshotIndex._t = new Date().getTime();
          snapshotIndex.state = currentPage.stateName;
          if( currentPage.controllerObject.title ) {
            snapshotIndex.title = currentPage.controllerObject.title;
          }

          snapshotIndex.screenshot = pngDataUrl;

          return snapshotIndex;

        });

    } // @end: getSnapshotIndexObject

    function takeScreenshotAndResize() {

      // px
      var default_width = 250,
          default_height = 200;

      return screenshot
        .thumbnail(default_width, default_height)
        .then(function( canvas ) {

          // http://caniuse.com/#feat=canvas [ not work only on IE8 ]
          return canvas.toDataURL();

        });
    } // @end: takeScreenshotAndResize

    function collectAndStoreData() {

      var indexPromise = getSnapshotIndexObject()
        .then(function( snapshotIndex ) {

          // TODO: remove
          console.log( 'snapshot index object: ', snapshotIndex );

          return storage
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

        });

      var dataPromise = getSnapshotObject()
        .then(function( snapshot ) {

          // TODO: remove
          console.log( 'snapshot object: ', snapshot );

          return storage
            .data
            .set( currentPage.stateName, snapshot )
            .then(function( savedObject ) {
              var msg = 'snapshot object from < ' + currentPage.stateName + ' > - saved: ' + (snapshot === savedObject);
              return msg;
            });

        });

      // https://code.angularjs.org/1.3.13/docs/api/ng/service/$q
      return $q
        .all([ indexPromise, dataPromise ])
        .then(function( results ) {

          return results;

        });

    }

  } // @end: collectAndStoreData

});
