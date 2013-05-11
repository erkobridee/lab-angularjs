angular.module('AppService', ['ngResource'])
  .factory('TwitterResource', function($resource) {
      var twitter = $resource(
        'https://search.twitter.com/:action',
        {
          action:'search.json'
        , q:'soudev'        
        , 'callback': 'JSON_CALLBACK'
        }, {
          'get': {
              'method': 'JSONP'
          }
        }
      );

      return twitter;
  });