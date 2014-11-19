define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('AboutCtrl', AboutCtrl);

  //---

  AboutCtrl.$inject = ['$log'];

  function AboutCtrl(console) {
    var vm = this;

    console.debug( 'AboutCtrl' );

    vm.pageName = 'About Page';

  }

});
