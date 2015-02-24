define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('FormCtrl', PageCtrl);

  //---

  PageCtrl.$inject = [ '$state', 'MultiPagesService', 'MultiPagesSnapshotResolved' ];

  function PageCtrl( $state, multipages, snapshot ) {

    // TODO: remove
    console.log( snapshot );

    var vm = this;

    vm.title = 'Form';

    vm.model = {
      someValue  : 'some value for form content',
      inputValue : 'form input value',
      areaValue  : 'form textarea value'
    };

    //---

    console.log( 'PageCtrl:' );
    console.log( $state );

    // currentStateObject, controllerObject, fieldsArray, snapshotObject
    multipages.set( $state.current, vm, ['title', 'model'], snapshot );

  }

});
