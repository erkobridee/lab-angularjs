(function() {
  'use strict';

  angular.module( 'app' ).controller( 'MainCtrl', MainCtrl );

  //---

  MainCtrl.$inject = [ '$scope', 'Scopes' ];

  function MainCtrl( $scope, Scopes ) {
    var vm = this;

    vm.name = '';
    vm.setNome = setNome;

    vm.email = '';
    vm.setEmail = setEmail;

    vm.result = '';

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
      $scope.$apply(function() {
        vm.result = 'MainCtrl Submit Form \n';
        vm.result += 'Name: ' + vm.name + '\n';
        vm.result += 'Email: ' + vm.email + '\n';
      });

      return false;
    }

  }

})();
