define(function(require) {
  'use strict';

  var module = require('./module');
  require('i18n/package');

  module.controller( 'AboutCtrl', AboutCtrl );

  //---

  AboutCtrl.$inject = [ '$scope' ];

  function AboutCtrl($scope) {

    console.log('AboutCtrl');

  }

});
