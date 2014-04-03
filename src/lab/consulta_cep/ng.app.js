define(
// require.js dependency injection
[
  'angular',

  './app/main/require.load'
],

// require.js module scope
function(ng) {
  'use strict';

  // start angular app
  ng.element(document).ready(function() {

    ng.bootstrap(document, ['main']);

  });

});
