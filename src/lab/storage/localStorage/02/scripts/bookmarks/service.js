(function() {
  'use strict';

  function BookmarksService( $q, persistence ) {
    var persistenceKey = 'bookmarks';

    var list = ( persistence.extractItem( persistenceKey ) || [] );

    //---

    persistence.onBeforePersist(function handleBookmarksPersist() {
      persistence.setItem( persistenceKey, list );
    });

    //--- @begin: internal logic
    function addFn( object ) {
      object = angular.copy( object );
      object.id = ( new Date() ).getTime();
      list.push( object );
      return ( $q.when( object.id ) );
    }

    function deleteFn( id ) {
      for( var i = 0, length = list.length ; i < length ; i++ ) {
        if( list[ i ].id === id ) {
          list.splice( i, 1 );
          break;
        }
      }
      return ( $q.when() );
    }

    // Get the entire collection of friends. Returns a promise.
    function getListFn() {
      /*
        NOTE: Using .copy() so that the internal cache can't be
        mutated through direct object references.
      */
      return ( $q.when( angular.copy( list ) ) );
    }
    //--- @end: internal logic

    var service = {
      add: addFn,
      delete: deleteFn,
      getList: getListFn,
    };

    return service;
  }

  BookmarksService.$inject = ['$q', 'PersistenceService'];

  angular
    .module('app')
    .factory('BookmarksService', BookmarksService);

})();
