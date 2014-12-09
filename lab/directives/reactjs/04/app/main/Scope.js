(function() {
  'use strict';

  angular.module( 'app' ).factory( 'Scopes', Scopes );

  function Scopes() {

      var mem = {};

      return {

          store: function (key, value) {
            mem[key] = value;
          },

          get: function (key) {
              return mem[key];
          }

      };

  }

})();
