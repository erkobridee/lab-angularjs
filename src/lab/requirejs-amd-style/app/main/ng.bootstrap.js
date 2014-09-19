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

  ng.element(document).ready(function() {

    console.log('bootstrap : ' + module.name);

    ng.bootstrap(document, [module.name]);

  });

});
