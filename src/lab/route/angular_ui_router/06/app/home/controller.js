define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = ['$state'];

  function HomeCtrl(state) {
    var vm = this;

    vm.greetings = 'Home controller say: Welcome to Angular Routes Example';

    vm.goToAbout = function() {
      console.log('home controller :: goToAbout');
      state.go('about');

    };

    vm.gotToPage = function() {
      console.log('home controller :: goToPage');
      state.go('page');
    };

    vm.gotToDashboard = function() {
      console.log('home controller :: goToDashboard');
      state.go('dashboard');
    };

    vm.navTo = function( stateName ) {
      console.log( 'home controller :: navTo : ', stateName );
      state.go( stateName );
    };

  }

});
