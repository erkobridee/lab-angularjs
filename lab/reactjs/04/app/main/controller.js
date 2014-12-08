(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ 'Scopes' ];

  function MainCtrl(Scopes) {
    var vm = this;

    vm.name = '';
    vm.setNome = setNome;

    vm.email = '';
    vm.setEmail = setEmail;

    vm.onSubmitForm = onSubmitForm;

    Scopes.store( 'MainCtrl', vm );

    //---

    function setEmail(value) {
      vm.email = value;
    }

    function setNome(value) {
      vm.name = value;
    }

    function onSubmitForm() {
      console.log( 'MainCtrl Submit Form' );
      console.log( 'name :', vm.name );
      console.log( 'email:', vm.email );
    }

  }

})();
