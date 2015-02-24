define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('FormCtrl', PageCtrl);

  //---

  PageCtrl.$inject = [ 'MultiPagesService', 'MultiPagesSnapshotResolved' ];

  function PageCtrl( multipages, snapshot ) {

    var vm = this;

    vm.title = 'Form';

    vm.model = {
      someValue  : 'some value for form content',
      inputValue : 'form input value',
      areaValue  : 'form textarea value'
    };

    //---

    // controllerObject, fieldsArray, snapshotObject
    multipages.set( vm, ['title', 'model'], snapshot );

  }

});
