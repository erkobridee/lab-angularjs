define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('AboutCtrl', AboutCtrl);

  //---

  AboutCtrl.$inject = [ 'MultiPagesService', 'MultiPagesSnapshotResolved' ];

  function AboutCtrl( multipages, snapshot ) {

    var vm = this;

    vm.title = 'About';

    vm.model = {
      someValue : 'Value from About Controller',
      areaValue : ''
    };

    //---

    // controllerObject, fieldsArray, snapshotObject
    multipages.set( vm, ['title', 'model'], snapshot );

  }

});
