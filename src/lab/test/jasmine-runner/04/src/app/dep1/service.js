define(function(require) {
  'use strict';

  var module = require('./module');

  module.service('Dep1Service', Dep1Service);

  //---

  Dep1Service.$inject = ['$log'];

  function Dep1Service(console) {
    console.debug('Dep1Service');
    return new Dep1ServiceClass();
  }

  var Dep1ServiceClass = (function () {

    // class definition
    function Dep1Service() {}
    var ClassDef = Dep1Service;

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

});

