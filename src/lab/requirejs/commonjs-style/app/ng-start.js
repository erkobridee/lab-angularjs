define(function(require) {
  'use strict';

  var angular = require('angular');
  var main = require('./main/package');

  angular.element(document).ready(function() {

    console.log('bootstrap : ' + main.name);

    angular.bootstrap(document, [main.name]);

  });

});
