define(function(require) {
  'use strict';

  var angular = require('angular');
  var mainModule = require('./main/require.load');

  console.log('bootstrap : ' + mainModule.name);

  console.log(mainModule.value('appName').requires);

  angular.element(document).ready(bootstrap);

  //---

  function bootstrap() {

    console.log('bootstrap : ' + mainModule.name);

    angular.bootstrap(document, [mainModule.name]);

  }

});
