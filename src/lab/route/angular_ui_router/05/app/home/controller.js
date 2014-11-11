define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller(

    // controller name
    'HomeCtrl',

    // dependencies injection
    ['$scope', '$state',

  // controller definition
  function(scope, state) {

    scope.greetings = 'Home controller say: Welcome to Angular Routes Example';

    scope.goToAbout = function() {
      console.log('home controller :: goToAbout');
      state.go('about');

    };

    scope.gotToPage = function() {
      console.log('home controller :: goToPage');
      state.go('page');
    };

    scope.gotToDashboard = function() {
      console.log('home controller :: goToDashboard');
      state.go('dashboard');
    };

  }]);

});
