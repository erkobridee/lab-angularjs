define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('AboutCtrl', AboutCtrl);

  //---

  AboutCtrl.$inject = [ '$state' ];

  function AboutCtrl( $state ) {
    var vm = this;

    vm.someValue = 'Value from About Controller';

    //---

    console.log( 'AboutCtrl:' );
    console.log( $state );
    configStateHandlers( $state.current, vm );

  }

  function configStateHandlers( state, ctrl ) {

    console.log( 'AboutCtrl configStateHandlers:' );
    console.log( 'current state : ', state );
    console.log( 'controller: ', ctrl );

    state.onExit = function() {
      console.log( 'AboutCtrl - onExit : ', this );

      state.onExit = null;
      delete state.onExit;
    };

  }

});
