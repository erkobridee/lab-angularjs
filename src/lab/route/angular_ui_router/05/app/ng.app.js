define(function(require) {
  'use strict';

  var angular = require('angular');
  var mainModule = require('./main/require.load');

  console.log('bootstrap : ' + mainModule.name);
  //ng.bootstrap(document, [mainModule.name]);

  // @begin: new main module definition test
  console.log(mainModule.value('appName').requires);

  console.log('define new main module, and add more dependecies');

  var runModule = angular.module(
    // module name
    'run',

    // module dependencies
    [mainModule.name]
  );

  console.log(runModule.value('appName').requires);

  angular.element(document).ready(function() {

    console.log('bootstrap : ' + runModule.name);

    angular.bootstrap(document, [runModule.name]);

  });
  // @end: new main module definition test

});
