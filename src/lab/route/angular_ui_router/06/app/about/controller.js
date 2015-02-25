define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('AboutCtrl', AboutCtrl);

  //---

  AboutCtrl.$inject = [ 'MultiPagesService' ];

  function AboutCtrl( multipages) {

    var vm = this;

    vm.title = 'About';

    vm.model = {
      someValue : 'Value from About Controller',
      areaValue : ''
    };

    //---

    // controllerObject, fieldsArray
    multipages.set( vm, ['title', 'model'] );

  }

});
