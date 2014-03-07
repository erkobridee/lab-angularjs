define(
// require.js dependency injection
[
  'angular'
], 

// require.js module scope 
function(ng) {
  'use strict';


  var module = ng.module(
    // module name
    'moduleA', 

    // module dependencies
    []
  );

  return module;

  
});