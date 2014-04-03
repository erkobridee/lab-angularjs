angular.mock.backend.addResource(function(angular, httpBackend, regexpUrl) {
  'use strict';

  // Allow JSONP to pass to external services (ie Solr)
  httpBackend.when('JSONP', regexpUrl(/http:\/\/.*/)).passThrough();

});
