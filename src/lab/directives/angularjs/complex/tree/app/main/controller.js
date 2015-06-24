(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [  ];

  function MainCtrl( ) {
    var vm = this;

    // tree object structure to achieve
    vm.tree = [
      {text: 'AA'},
      {text: 'BB', children: [
        {text: 'BB.01'},
        {text: 'BB.02'},
        {text: 'BB.03'},
      ]},
      {text: 'CC'},
      {text: 'DD', children: [
        {text: 'DD.01'},
      ]}
    ];

  }

})();
