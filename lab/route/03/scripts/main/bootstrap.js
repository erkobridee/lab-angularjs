define(
// require.js dependency injection
[
  'angular',

  './module',
  './routes',
  '../controllers/require.load'
], 

// require.js module scope
function(ng, module) {
  'use strict';

  console.log('bootstrap : ' + module.name);

  ng.bootstrap(document, [module.name]);  

});