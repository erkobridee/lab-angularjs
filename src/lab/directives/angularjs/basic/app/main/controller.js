(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [  ];

  function MainCtrl( ) {
    var vm = this;

    vm.message = null;
    vm.name = 'Erko Bridee';

    vm.person1 = {
      name: 'Janderson F. C.',
      github: 'https://github.com/jandersonfc'
    };

    vm.person2 = {
      name: 'Mario Junior',
      github: 'https://github.com/mariojunior'
    };

    vm.receiveMessage = function(value) {
      vm.message = value;
    };

    vm.handler = function() {
      console.log('app : MainCtrl : handler()');
    };

  }

})();
