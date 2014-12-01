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

      lazyLoad.state({
        name: 'about',
        path: 'app/modules/pages/'
      });

    };

    vm.gotToDashboard = function() {

      console.log('home controller :: goToDashboard');

      lazyLoad.state({
        name: 'dashboard',
        path: 'app/modules/useCases/'
      });

    };

    vm.loadAllModules = function() {

      lazyLoad
        .load(['pages', 'useCases'])
        .then(function( result ) {
          console.log( 'modules loaded...' );
          console.log( result );
        });

    };

  }

});
