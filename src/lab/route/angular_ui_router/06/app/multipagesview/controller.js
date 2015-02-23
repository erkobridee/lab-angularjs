define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('MultiPagesViewCtrl', MultiPagesViewCtrl);

  //---

  MultiPagesViewCtrl.$inject = [ 'MultiPagesService', 'MultiPagesList' ];

  function MultiPagesViewCtrl( multipages, multipageslist ) {
    var vm = this;

    vm.title = 'Multi Pages View';

    console.log( multipageslist );

    vm.model = {};
    vm.model.list = multipageslist;

    vm.flag = {};
    vm.flag.showRemoveAll = ( multipageslist && multipageslist.length > 0 );

    vm.actions = {
      navto: multipages.navto,
      remove: removePage,
      removeAll: removeAllPages
    };

    //---

    function removePage( stateName ) {

      multipages
        .remove
        .page( stateName )
        .then(function( list ) {

          console.log( list );

          vm.model.list = list;
          vm.flag.showRemoveAll = ( list && list.length > 0 );

        });

      // TODO: reload pages list
    }

    function removeAllPages() {

      multipages
        .remove
        .all()
        .then(function() {
          vm.model.list = [];
          vm.flag.showRemoveAll = false;
        });

    }

  }

});
