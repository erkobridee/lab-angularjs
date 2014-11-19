define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = ['$log'];

  function MainCtrl(console) {

    console.debug('MainCtrl');

  }

});
