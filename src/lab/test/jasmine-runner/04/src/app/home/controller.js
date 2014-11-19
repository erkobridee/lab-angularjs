define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HomeCtrl', HomeCtrl);

  //---

  HomeCtrl.$inject = ['$log'];

  function HomeCtrl(console) {
    var vm = this;

    console.debug( 'HomeCtrl' );

    vm.pageName = 'Home Page';

  }

});
