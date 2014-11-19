define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory('Dep1Factory', Dep1Factory);

  //---

  // Dep1Factory.$inject = [];

  function Dep1Factory() {

    var service = {
      exciteText: exciteText
    };

    return service;

    //---

    function checkMsg(msg) {
      return msg || 'Hello';
    }

    function exciteText(msg) {
      return checkMsg(msg) + '!!!';
    }

  }

});
