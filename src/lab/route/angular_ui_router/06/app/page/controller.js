define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('PageCtrl', PageCtrl);

  //---

  PageCtrl.$inject = [ 'MultiPagesService', 'MultiPagesSnapshotResolved' ];

  function PageCtrl( multipages, snapshot ) {

    var vm = this;

    vm.title = 'Page';

    vm.model = {
      someValue : 'some value for page content',
      areaValue : 'page textarea value'
    };

    //---

    // controllerObject, fieldsArray, snapshotObject
    multipages.set( vm, ['title', 'model'], snapshot );

  }

});
