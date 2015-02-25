define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = [ 'MultiPagesService', '$modal' ];

  function MainCtrl( multipages, $modal ) {
    var vm = this;

    vm.showPages = showPages;

    //---

    function showPages() {

      multipages
        .prepareToShow()
        .then(function( list ) {

          $modal.open({
            templateUrl  : 'app/main/templates/modal.html',
            size         : 'lg',
            controller   : 'MultiPagesModalCtrl',
            controllerAs : 'vm',
            resolve      : {
              MultiPagesList: function() {
                return list;
              }
            }
          });

        });

    } // @end: showPages


  }

  //----------------------------------------------------------------------------

  module.controller('MultiPagesModalCtrl', MultiPagesModalCtrl);

  //---

  MultiPagesModalCtrl.$inject = ['MultiPagesService', 'MultiPagesList', '$modalInstance'];

  function MultiPagesModalCtrl( multipages, list, $modalInstance ) {
    var vm = this;

    vm.list          = list;
    vm.showRemoveAll = ( list && list.length > 0 );
    vm.actions       = {
      navto     : navTo,
      remove    : removePage,
      removeAll : removeAllPages,
      close     : closeModal
    };

    //---

    function closeModal() {
      $modalInstance.close();
    }

    function navTo( stateName ) {
      multipages.navto( stateName );
      closeModal();
    }

    function removePage( stateName ) {

      multipages
        .remove
        .page( stateName )
        .then(function( list ) {

          console.log( list );

          vm.list = list;
          vm.showRemoveAll = ( list && list.length > 0 );

        });

    } // @end: removePage

    function removeAllPages() {

      multipages
        .remove
        .all()
        .then(function() {
          vm.list = [];
          vm.showRemoveAll = false;
        });

    } // @end: removeAllPages()

  }

});
