define(
// require.js dependency injection
[
  'angular',
  'mock/backend',
  './data'
], 

// require.js module scope
function(ng, backend) {
  'use strict';


  backend.addResource(

    // mock resource dependencies injection
    ['$httpBackend', 'regexpUrl', 'getParams', 'GitHubUsersData',

  // mock resource definition
  function(httpBackend, regexpUrl, getParams, db) {

    //--- URL match

    // URL ended with /users without anything else
    httpBackend.when('GET', regexpUrl(/api\.github\.com\/users(\/)?$/))
      .respond(function(method, url, data) {
        return [404, ng.copy(db.notFound)];
      });

      
    httpBackend.when('GET', regexpUrl(/api\.github\.com\/users\/[A-z0-9]+$/))
      .respond(function(method, url, data) {
        console.log(url);
        
        var user = null, login = getLoginFromURL(url);
        if(login) user = findUserByLogin(login);

        var result = [404, ng.copy(db.notFound)]; 
        if(user) result = [200, ng.copy(user)];
        
        return result;
      });


    //--- internal process

    function getLoginFromURL(url) {
      var arr = url.split(/users\//);
      if(arr.length > 1) return arr[1];
      return null;
    }

    function findUserByLogin(login) {
      var users = db.users;
      for(var i = 0, len = users.length; i < len; i++) {
        if(users[i].login === login) return users[i];
      }
      return null;
    }

  }]);


});