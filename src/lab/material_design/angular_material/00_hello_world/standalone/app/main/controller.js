(function(){
  'use strict';

  angular
    .module('app')
    .controller('Main', Main);

  //---

  Main.$inject = ['$mdDialog', '$log'];

  function Main($mdDialog, console){
    var vm = this;

    vm.message = 'Hello World';

    var count = 1;
    vm.people = [
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
      { name: 'Person '+count, twitter: '@person'+(count++) },
    ];

    vm.buttonAction = function(value, $event){
      console.log('buttonAction called with value: ', value);

      $mdDialog.show(
        $mdDialog.alert()
          .title('Button Action')
          .content('Some content... ' + value)
          .ariaLabel('click demo')
          .ok('Close')
          .targetEvent(event)
      );

    };

  }

})();
