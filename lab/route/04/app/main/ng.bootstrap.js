define(
// require.js dependency injection
[
  'angular',

  './module',
  './routes'
],

// require.js module scope
function(ng, module) {
  'use strict';

  console.log('bootstrap : ' + module.name);
  //ng.bootstrap(document, [module.name]);

  // @begin: new main module definition test
  console.log(module.value('appName').requires);

  console.log('define new main module, and add more dependecies');

  var runModule = ng.module(
    // module name
    'run',

    // module dependencies
    [module.name, 'about']
  );

  console.log(runModule.value('appName').requires);

  ng.element(document).ready(function() {

    console.log('bootstrap : ' + runModule.name);

    ng.bootstrap(document, [runModule.name]);

  });
  // @end: new main module definition test

});
