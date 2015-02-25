define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('FormCtrl', PageCtrl);

  //---

  PageCtrl.$inject = [ 'MultiPagesService' ];

  function PageCtrl( multipages ) {

    var vm = this;

    vm.title = 'Form';

    vm.model = {
      someValue  : 'some value for form content',
      inputValue : 'form input value',
      areaValue  : 'form textarea value'
    };

    //---

    // controllerObject, fieldsArray
    multipages.set( vm, ['title', 'model'] );

  }

});
