(function() {
  'use strict';

  function BookmarksController($window, service, persistence) {
    var vm = this;

    vm.list = [];

    vm.form = {
      title: '',
      link: ''
    };

    //--- @begin: internal logic

    function applyData( list ) {
      vm.list = list;
    }

    function loadData() {
      service
        .getList()
        .then( applyData );
    }
    loadData();

      //---

    function removeFn( bookmark ) {
      service
        .delete( bookmark.id )
        .then( loadData );
    }

    function processFormFn() {
      if(
        !vm.form.title ||
        !vm.form.link
      ) {
        return;
      }

      service
        .add( vm.form )
        .then( loadData );

      vm.form.title = '';
      vm.form.link = '';
    }

    function logoutFn() {
      persistence.disablePersist();
      $window.location.href = './logout.html';
    }
    //--- @end: internal logic

    vm.remove = removeFn;
    vm.processForm = processFormFn;
    vm.logout = logoutFn;

  }

  BookmarksController.$inject = ['$window', 'BookmarksService', 'PersistenceService'];

  angular
    .module('app')
    .controller('Bookmarks', BookmarksController);

})();
