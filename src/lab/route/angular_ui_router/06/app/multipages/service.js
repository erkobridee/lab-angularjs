define(function(require) {
  'use strict';

  var angular = require('angular');
  var module = require('./module');

  module.factory('MultiPagesService', MultiPagesService);

  //---

  MultiPagesService.$inject = ['MultiPagesStorage'];

  function MultiPagesService( storage ) {

    var service = {
      set: setPage,
      get: getPage,
      list: listPages,
      remove: {
        page: removePage,
        all: removeAllPages
      }
    };

    return service;

    //---

    function setPage( currentStateObject, controllerObject, fieldsArray, snapshotObject ) {

      // TODO: review

      console.log( 'current state : ', currentStateObject );
      console.log( 'controller: ', controllerObject );

      applySnapshotObject();


      //---

      currentStateObject.onExit = function() {
        removeOnExitHandler( this );
        console.log( 'onExit : ', this, controllerObject );

        var snapshot = getSnapshotObject();
        console.log( 'snapshot object: ', snapshot );

        storage
          .data
          .set( currentStateObject.name, snapshot )
          .then(function(value) {
            console.log('snapshot object saved', (snapshot === value) );

            // TODO: update index

          });
      };

      function removeOnExitHandler( state ) {
        state.onExit = null;
        delete state.onExit;
      }

      //---

      function getSnapshotObject() {
        var snapshot = {};
        for (var i = fieldsArray.length - 1; i >= 0; i--) {
          var field = fieldsArray[i];
          snapshot[field] = controllerObject[field]; // TODO: review : need copy?
        }
        return snapshot;
      }

      function applySnapshotObject() {
        if( angular.isObject( snapshotObject ) ) {
          for (var i = fieldsArray.length - 1; i >= 0; i--) {
            var field = fieldsArray[i];
            var value = snapshotObject[field]; // TODO: review : need copy?
            if(value) controllerObject[field] = value;
          }
        }
      }

    }

    function getPage( stateName ) {

      // TODO: review
      var msg = 'snapshot object from : ' + stateName + ' | ' + new Date().toUTCString();

      return storage
        .data
        .get( stateName ) // TODO: update index
        .then(function(value) {
          var output = value || {};
          output._info_ = msg;
          console.log( 'storage - ' + stateName + ' : ' + value );
          console.log( msg );
          return output;
        });
    }

    function listPages() {
      // TODO: define
    }

    function removePage( stateName ) {
      // TODO: define
    }

    function removeAllPages() {
      // TODO: define
    }

  }

});
