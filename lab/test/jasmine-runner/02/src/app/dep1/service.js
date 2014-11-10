define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';


  var service = (function () {

    // class definition
    //function ClassDef($http) {}
    function ClassDef() {}

    // private
    function checkMsg(msg) {
      return msg || 'Hello';
    }

    // public
    ClassDef.prototype.questionText = function(msg) {
      return checkMsg(msg) + '???';
    };

    return ClassDef;

  })();


  module.service(
    // service name
    'Dep1Service',

    // dependencies injection
    [

    // service definition
    service
  ]);

});
