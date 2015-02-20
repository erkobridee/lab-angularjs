define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('AboutCtrl', AboutCtrl);

  //---

  AboutCtrl.$inject = [ '$state', 'MultiPagesService', 'MultiPagesSnapshotResolved' ];

  function AboutCtrl( $state, multipages, snapshot ) {
    console.log( snapshot );

    var vm = this;

    vm.title = 'About';

    vm.model = {
      someValue: 'Value from About Controller'
    };

    //---

    console.log( 'AboutCtrl:' );
    console.log( $state );

    // currentStateObject, controllerObject, fieldsArray, snapshotObject
    multipages.set( $state.current, vm, ['title', 'model'], snapshot );

  }

});
