define(function(require) {
  'use strict';

  var angular = require('angular');
  var main = require('./main/package');

  function startApp() {
    console.log('bootstrap : ' + main.name);

    angular.bootstrap(document, [
      main.name
    ]);
  }

  angular
    .element(document)
    .ready(startApp);

});
