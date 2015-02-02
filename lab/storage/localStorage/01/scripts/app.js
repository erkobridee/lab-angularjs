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
      data.set( DATA_KEY, vm.value );
    }

    function getDataValue() {
      vm.value = data.get( DATA_KEY );
    }

    function removeDataValue() {
      vm.value = null;

      var value = data.get( DATA_KEY );

      data.remove( DATA_KEY );

      console.log( 'data db key : ' + DATA_KEY + ' | value : ' + value + ' - removed' );
    }

    //---

    var TOKEN_KEY = 'authToken';

    function setTokenValue() {
      token.set( TOKEN_KEY, vm.token );
    }

    function getTokenValue() {
      vm.token = token.get( TOKEN_KEY );
    }

    function removeTokenValue() {
      vm.token = null;

      var value = token.get( TOKEN_KEY );

      token.remove( TOKEN_KEY );

      console.log( 'token db key : ' + TOKEN_KEY + ' | value : ' + value + ' - removed' );
    }

    //--- init ---
    (function() {
      var initValues = {
        data: 'some value',
        token: '1a2b3c4d5e6f'
      };

      getDataValue();
      if( !vm.value ) {
        vm.value = initValues.data;
        setDataValue();
        console.log( 'init data value saved on storage : ' );
        console.log( vm.value );
      } else {
        console.log( 'value loaded from storage : ' );
        console.log( vm.value );
      }

      getTokenValue();
      if( !vm.token ) {
        vm.token = initValues.token;
        setTokenValue();
        console.log('init token value saved on storage : ');
        console.log( vm.token );
      } else {
        console.log( 'token loaded from storage : ' );
        console.log( vm.token );
      }

    })();

  }

})();
