define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

  module.filter(

    // filter name
    'reverse',

  function() {

    return function(input, uppercase) {

      var out = "";

      for (var i = 0, len = input.length; i < len; i++) {
        out = input.charAt(i) + out;
      }

      // conditional based on optional argument
      if (uppercase) {
        out = out.toUpperCase();
      }

      return out;
    };

  });

});
