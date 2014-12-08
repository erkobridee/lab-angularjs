(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ ];

  //---

  function MainCtrl() {
    var vm = this;

    vm.name = '';
    vm.email = '';
    vm.onSubmitForm = onSubmitForm;

    //---

    function onSubmitForm() {
      console.log( 'MainCtrl Submit Form' );
      console.log( 'name :', vm.name );
      console.log( 'email:', vm.email );
    }

  }

})();
