define(function(require) {
  'use strict';

  var module = require('./module');

  module.factory('CepResource', CepResource);

  //---

  // https://code.angularjs.org/1.3.3/docs/api/ngResource/service/

  CepResource.$inject = ['$resource'];

  function CepResource($resource) {

    return $resource(
      'https://api.postmon.com.br/v1/cep/:cep'
    );

  }

});
