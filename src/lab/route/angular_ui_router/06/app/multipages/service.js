define(function(require) {
  'use strict';

  var angular = require('angular');
  var module = require('./module');

  module.factory('MultiPagesService', MultiPagesService);

  //---

  MultiPagesService.$inject = ['MultiPagesStorage', '$state', '$window']; //  TODO: remove $window

  function MultiPagesService( storage, $state, $window ) {

    var service = {
      set: setPage,
      get: getPage,
      list: listPages,
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

    function setPage( currentStateObject, controllerObject, fieldsArray, snapshotObject ) {
      var currentStateName = currentStateObject.name;

      // TODO: review

      console.log( 'current state : ', currentStateObject );
      console.log( 'controller: ', controllerObject );

      applySnapshotObject();


      //---

      // http://www.ng-newsletter.com/posts/angular-ui-router.html
      // https://github.com/angular-ui/ui-router/wiki#onenter-and-onexit-callbacks
      currentStateObject.onExit = function() {

        console.log( $state.current );

        removeOnExitHandler( this );
        console.log( 'onExit : ', this, controllerObject );

        var snapshotIndex = getSnapshotIndexObject();
        console.log( 'snapshot index object: ', snapshotIndex );

        var snapshot = getSnapshotObject();
        console.log( 'snapshot object: ', snapshot );

        storage
          .index
          .get()
          .then(function(indexObject) {
            indexObject = indexObject || {};
            indexObject[currentStateName] = snapshotIndex;
            return indexObject;
          })
          .then(function(indexObject) {
            return storage.index.set(indexObject);
          })
          .then(function(savedObject) {
            console.log('snapshot index object from < ' + currentStateName + ' > - saved: ', (savedObject[currentStateName] === snapshotIndex) );
          });

        storage
          .data
          .set( currentStateName, snapshot )
          .then(function(savedObject) {
            console.log('snapshot object from < ' + currentStateName + ' > - saved: ', (snapshot === savedObject) );
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
            if(value) controllerObject[field] = value;
          }
        }
      }

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
        .then(function(indexObject) {
          var pages = [];
          angular.forEach(indexObject, function(value, key) {
            this.push( value );
          }, pages);
          return pages;
        });

    }

    function removePage( stateName ) {
      // TODO: define
    }

    function removeAllPages() {
      // TODO: define
    }

  }

});
