define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = ['$state', 'LazyLoadService'];

  function HomeCtrl(state, lazyLoad) {
    var vm = this;

    vm.greetings = 'Home controller say: Welcome to Angular Routes Example';

    vm.gotToPage = function() {
      console.log('home controller :: goToPage');
      state.go('page');
    };

    vm.goToAbout = function() {

      console.log('home controller :: goToAbout');

      lazyLoad.state('about');

    };

    vm.gotToDashboard = function() {

      console.log('home controller :: goToDashboard');

      lazyLoad.state('dashboard');

    };

    vm.loadAllModules = function() {

      lazyLoad
        .load(['about', 'dashboard'])
        .then(function( result ) {
          console.log( 'modules loaded...' );
        });

    };

  }

});
