define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('HelpCtrl', AboutCtrl);

  //---

  //AboutCtrl.$inject = [];

  function AboutCtrl() {
    var vm = this;

    vm.someValue = 'Value from Help Controller';
  }

});
