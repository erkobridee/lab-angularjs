define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('AboutCtrl', AboutCtrl);

  //---

  AboutCtrl.$inject = [ '$state', '$rootScope' ];

  function AboutCtrl( $state, $rootScope ) {
    var vm = this;

    vm.someValue = 'Value from About Controller';

    //---

    vm.onEnter = onEnterHandler;
    vm.onExit = onExitHandler;

    //---

    console.log( 'AboutCtrl:' );
    console.log( $state );

    configStateHandlers( $state.current, vm );

    //---

    function onEnterHandler() {
      console.log( 'AboutCtrl - onEnterHandler' );
    }

    function onExitHandler() {
      console.log( 'AboutCtrl - onExitHandler' );
    }

  }

  function configStateHandlers( state, ctrl ) {
    var _onEnter = state.onEnter;
    state.onEnter = function() {
      console.log( 'AboutCtrl - onEnter : ', this );
      if( ctrl.onEnter ) ctrl.onEnter();
      if( _onEnter ) {
        _onEnter();
        state.onEnter = _onEnter;
      }
    };

    var _onExit = state.onExit;
    state.onExit = function() {
      console.log( 'AboutCtrl - onExit : ', this );
      if( ctrl.onExit ) ctrl.onExit();
      if( _onExit ) {
        _onExit();
        state.onExit = _onExit;
      }
    };
  }

});
