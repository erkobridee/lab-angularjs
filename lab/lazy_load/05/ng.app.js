define(function(require) {
  'use strict';

  var angular = require('angular');
  var mainModule = require('app/core/package');

  console.log('bootstrap : ' + mainModule.name);

  console.log(mainModule.value('appName').requires);

  angular.element(document).ready(startAngularApp);

  //---

  function startAngularApp() {

    console.log('bootstrap : ' + mainModule.name);

    angular.bootstrap(document, [mainModule.name]);

  }

});
