define(
// require.js dependency injection
[
  'angular',

  './main/require.load'
],

// require.js module scope
function(ng, module) {
  'use strict';

  ng.element(document).ready(function() {

    console.log('bootstrap : main');

    ng.bootstrap(document, ['main']);

  });

});
