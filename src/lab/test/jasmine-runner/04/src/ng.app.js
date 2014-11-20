define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.element(document).ready(bootstrap);

  //---

  function bootstrap() {

    angular.bootstrap(document, [require('./app/main/package').name]);

  }

});
