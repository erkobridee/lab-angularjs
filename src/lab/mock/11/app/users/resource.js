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
    'UsersResource',

    // dependency injection
    ['$http', '$q',

  function($http, $q) {

    /*
    Promises in AngularJS, Explained as a Cartoon | Andy Shora
    http://andyshora.com/promises-angularjs-explained-as-cartoon.html

    A Simple Visual Model for Promises | Flippin' Awesome
    http://flippinawesome.org/2013/10/14/a-simple-visual-model-for-promises/
    */

    //---
    var successHandler = function(response) {
        if (typeof response.data === 'object') {
          return response.data;
        } else {
          // invalid response
          return $q.reject(response.data);
        }
    };

    var errorHandler =  function(response) {
      // something went wrong
      return $q.reject(response.data);
    };

    //---
    var baseUrl = '/rest/users';
    //---

    return {
      getAll: function() {
        return $http.get(baseUrl).then(
          successHandler, errorHandler
        );
      },

      getUserName: function(userName) {
        return $http.get(baseUrl+'?userName='+userName).then(
          successHandler, errorHandler
        );
      },

      post: function(newUser) {
        return $http.post(baseUrl, newUser).then(
          successHandler, errorHandler
        );
      }
    };

  }]);


});
