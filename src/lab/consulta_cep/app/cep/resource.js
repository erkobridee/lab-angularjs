define(
// require.js dependency injection
[
  './module'
],

// require.js module scope
function(module) {
  'use strict';

  module.factory(
    // resource name
    'CepResource',

    // dependencies injection
    [
      '$resource',

  // resource definition
  function ($resource) {

    return $resource(
      'http://api.postmon.com.br/v1/cep/:cep'
    );

  }]);

});
