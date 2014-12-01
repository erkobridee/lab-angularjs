define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = ['$state', 'LazyLoadService', 'MenuService'];

  function HomeCtrl(state, lazyLoad, menu) {
    var vm = this;

    vm.greetings = 'Home controller say: Welcome to Angular Routes Example';

    vm.menu = menu.items;

    vm.gotToPage = gotToPage;

    vm.goToAbout = goToAbout;

    vm.gotToDashboard = gotToDashboard;

    vm.loadAllModules = loadAllModules;

    //---

    function gotToPage() {
      console.log('home controller :: goToPage');
      state.go('page');
    }

      // @begin: lazy load
    function goToAbout() {

      console.log('home controller :: goToAbout');

      lazyLoad.state({
        name: 'about',
        path: 'app/modules/pages/'
      });

    }

    function gotToDashboard() {

      console.log('home controller :: goToDashboard');

      lazyLoad.state({
        name: 'dashboard',
        path: 'app/modules/useCases/'
      });

    }

    function loadAllModules() {

      lazyLoad
        .load(['pages', 'useCases'])
        .then(function( result ) {
          console.log( 'modules loaded...' );
          console.log( result );
        });

    }
      // @end: lazy load

  }

});
