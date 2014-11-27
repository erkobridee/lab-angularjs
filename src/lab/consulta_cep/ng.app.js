define(function(require) {
  'use strict';

  var angular = require('angular');

  angular.element(document).ready(startAngularApp);

  //---

  function startAngularApp() {

    console.log('start angular application');

    // start angular app
    angular.bootstrap(document, [require('app/main/package').name]);

  }

});
