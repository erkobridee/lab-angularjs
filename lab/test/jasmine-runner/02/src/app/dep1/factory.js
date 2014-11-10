define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

  module.factory(

    // factory name
    'Dep1Factory',

    // dependencies injection
    [ //,

  function() {

    // private
    function checkMsg(msg) {
      return msg || 'Hello';
    }

    // public
    return {
      exciteText: function(msg) {
        return checkMsg(msg) + '!!!';
      }
    };

  }]);

});
