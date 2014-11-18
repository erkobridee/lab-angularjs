define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('ctrl.Hello', HelloCtrl);

  //---

  // HelloCtrl.$inject = [];

  function HelloCtrl() {
    var vm = this;

    vm.hello = 'Angular JS - Hello World 10 :: Require.js code style';

  }

});
