define(function(require) {
  'use strict';

  var angular = require('angular');

  function startApp(){
    angular.bootstrap(document, [
      require('./main/package').name
    ]);
  }

  angular
    .element(document)
    .ready(startApp);

});
