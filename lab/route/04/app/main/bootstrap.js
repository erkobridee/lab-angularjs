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

  console.log(module.value('appName').requires);

  console.log('define new main module, and add more dependecies');
  
  var runModule = ng.module(
    // module name
    'run',

    // module dependencies
    [module.name, 'about']
  );

  console.log(runModule.value('appName').requires);

  ng.bootstrap(document, [runModule.name]);  

});