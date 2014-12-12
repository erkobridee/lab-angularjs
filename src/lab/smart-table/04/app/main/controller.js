(function () {
  'use strict';

  angular.module( 'app' ).controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = [ ];

  function MainCtrl() {
    var vm = this;

    var nameList = [ 'Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa' ];
    var familyName = [ 'Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez' ];

    //---

    vm.rowCollection = [];

    //---

    initRowCollection();

    //---

    function initRowCollection() {
      for (var j = 0; j < 200; j++) {
        vm.rowCollection.push(createRandomItem());
      }
    }

    function createRandomItem() {
        var firstName = nameList[Math.floor(Math.random() * 4)];
        var lastName = familyName[Math.floor(Math.random() * 4)];
        var age = Math.floor(Math.random() * 100);
        var email = firstName + lastName + '@whatever.com';
        var balance = Math.random() * 3000;

        //---

        var item = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };

        //---

        return item;
    }

  }

})();
