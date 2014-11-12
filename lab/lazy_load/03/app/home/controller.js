define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = ['$state', '$ocLazyLoad'];

  function HomeCtrl(state, ocLazyLoad) {
    var vm = this;

    vm.greetings = 'Home controller say: Welcome to Angular Routes Example';

    vm.gotToPage = function() {
      console.log('home controller :: goToPage');
      state.go('page');
    };

    vm.goToAbout = function() {
      console.log('home controller :: goToAbout');

      ocLazyLoad.load({
        name: 'about',
        files: ['about/package'] // load
      })
      .then(function() { // After load
        console.log('about module loaded');
        state.go('about');
      });

    };

    vm.gotToDashboard = function() {
      console.log('home controller :: goToDashboard');

      ocLazyLoad.load({
        name: 'dashboard',
        files: ['dashboard/package'] // load
      })
      .then(function() { // After load
        console.log('dashboard module loaded');
        state.go('dashboard');
      });

    };

  }

});
