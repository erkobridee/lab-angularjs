define(
// require.js dependency injection
[
  'angular',
  './module',
  './controller'
],

// require.js module scope
function(ng, module) {
  'use strict';

  ng.element(document).ready(bootstrap);

  //---

  function bootstrap() {

    console.log('bootstrap : ' + module.name);

    ng.bootstrap(document, [module.name]);

  }

});
