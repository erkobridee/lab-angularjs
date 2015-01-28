(function() {
  'use strict';

  var app = angular.module('app', [
    'app.storage.token',
    'app.storage.data'
  ]);

  //---

  app.controller('MainCtrl', MainCtrl);

  //---

  MainCtrl.$inject = ['TokenStorage', 'DataStorage'];

  function MainCtrl(token, data) {
    var vm = this;

    vm.msg = 'hello storage';

    vm.value = null; //'some value';
    vm.token = null; //'1a2b3c4d5e6f';

    vm.setValue = setDataValue;
    vm.getValue = getDataValue;
    vm.removeValue = removeDataValue;

    vm.setToken = setTokenValue;
    vm.getToken = getTokenValue;
    vm.removeToken = removeTokenValue;

    //---

    var DATA_KEY = 'value';

    function setDataValue() {
      return data.ds.setItem( DATA_KEY, vm.value ).then(function() {
        console.log( vm.value + ' saved on data storage' );
      });
    }

    function getDataValue() {
      return data.ds.getItem( DATA_KEY ).then(function(value) {
        vm.value = value;
      });
    }

    function removeDataValue() {
      return data.ds.pull( DATA_KEY ).then(function(value) {
        vm.value = null;

        console.log( 'data db key : ' + DATA_KEY + ' | value : ' + value + ' - removed' );
      });
    }

    //---

    var TOKEN_KEY = 'authToken';

    function setTokenValue() {
      return token.ds.setItem( TOKEN_KEY, vm.token).then(function() {
        console.log( vm.token + ' saved on token storage' );
      });
    }

    function getTokenValue() {
      return token.ds.getItem( TOKEN_KEY ).then(function(value) {
        vm.token = value;
      });
    }

    function removeTokenValue() {
      return token.ds.pull( TOKEN_KEY ).then(function(value) {
        vm.token = null;

        console.log( 'token db key : ' + TOKEN_KEY + ' | value : ' + value + ' - removed' );
      });
    }

    //--- init ---
    (function() {
      var initValues = {
        data: 'some value',
        token: '1a2b3c4d5e6f'
      };

      getDataValue()
        .then(function() {
          if( !vm.value ) {
            vm.value = initValues.data;
            setDataValue().then(function() {
              console.log('init data value saved on storage : ');
              console.log( vm.value );
            });
          } else {
            console.log( 'value saved on storage: ' );
            console.log( vm.value );
          }
        });

      getTokenValue()
        .then(function() {
          if( !vm.token ) {
            vm.token = initValues.token;
            setTokenValue().then(function() {
              console.log('init token value saved on storage : ');
              console.log( vm.token );
            });
          } else {
            console.log( 'token saved on storage: ' );
            console.log( vm.token );
          }
        });

    })();

  }

})();
