define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  // HomeCtrl.$inject = ['$state', '$ocLazyLoad'];
  HomeCtrl.$inject = ['$state', 'LazyLoadService'];

  // function HomeCtrl(state, ocLazyLoad) {
  function HomeCtrl(state, lazyLoad) {
    var vm = this;

    vm.greetings = 'Home controller say: Welcome to Angular Routes Example';

    vm.gotToPage = function() {
      console.log('home controller :: goToPage');
      state.go('page');
    };

    vm.goToAbout = function() {
      console.log('home controller :: goToAbout');

      /*
      ocLazyLoad.load({
        name: 'about',
        files: ['app/about/package'] // load
      })
      .then(function() { // After load
        console.log('about module loaded');
        state.go('about');
      });
      */

      lazyLoad.state('about');

    };

    vm.gotToDashboard = function() {
      console.log('home controller :: goToDashboard');

      /*
      ocLazyLoad.load({
        name: 'dashboard',
        files: ['app/dashboard/package'] // load
      })
      .then(function() { // After load
        console.log('dashboard module loaded');
        state.go('dashboard');
      });
      */

      lazyLoad.state('dashboard');

    };

  }

});
