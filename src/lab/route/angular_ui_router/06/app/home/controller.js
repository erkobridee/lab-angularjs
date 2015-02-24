define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = ['$state'];

  function HomeCtrl(state) {
    var vm = this;

    vm.greetings = 'Home controller say: Welcome to Angular Routes Example 06';

    vm.navTo = navTo;

    //---

    function navTo( stateName ) {
      console.log( 'home controller :: navTo : ', stateName );
      state.go( stateName );
    }

  }

});
