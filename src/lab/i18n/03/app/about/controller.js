define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller( 'AboutCtrl', AboutCtrl );

  AboutCtrl.$inject = [ '$scope', '$translate' ];

  function AboutCtrl($scope, $translate) { }

});
