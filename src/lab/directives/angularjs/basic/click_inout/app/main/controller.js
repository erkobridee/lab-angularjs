(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = ['$log'];

  function MainCtrl(console) {
    var vm = this;

    vm.message = null;

    vm.onClickInHandler = function($event){
      vm.message = 'click in the element';
      console.log('MainCtrl.onClickInHandler', $event);
    };

    vm.onClickOutHandler = function($event){
      vm.message = 'click outside of the element';
      console.log('MainCtrl.onClickOutHandler', $event);
    };

  }

})();
