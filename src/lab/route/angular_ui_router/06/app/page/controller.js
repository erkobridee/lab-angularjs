define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('PageCtrl', PageCtrl);

  //---

  PageCtrl.$inject = [ '$state', 'MultiPagesService', 'MultiPagesSnapshotResolved' ];

  function PageCtrl( $state, multipages, snapshot ) {

    // TODO: remove
    console.log( snapshot );

    var vm = this;

    vm.title = 'Page';

    vm.model = {
      someValue: 'some value for page content'
    };

    //---

    console.log( 'PageCtrl:' );
    console.log( $state );

    // currentStateObject, controllerObject, fieldsArray, snapshotObject
    multipages.set( $state.current, vm, ['title', 'model'], snapshot );

  }

});
