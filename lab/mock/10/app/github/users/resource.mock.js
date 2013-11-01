angular.mock.backend.addResource(function($httpBackend, regexpUrl, getParams) {
  'use strict';

  //--- === ---

  // Allow GET users from GitHub API
  //$httpBackend.when('GET', regexpUrl(/api\.github\.com\/users(\/)?([A-z0-9]+)?$/)).passThrough();

  //--- === ---

  var users, notFound;

  //--- URL match

  // URL ended with /users without anything else
  $httpBackend.when('GET', regexpUrl(/api\.github\.com\/users(\/)?$/))
    .respond(function(method, url, data) {
      return [404, angular.copy(notFound)];
    });

    
  $httpBackend.when('GET', regexpUrl(/api\.github\.com\/users\/[A-z0-9]+$/))
    .respond(function(method, url, data) {
      console.log(url);
      
      var user = null, login = getLoginFromURL(url);
      if(login) user = findUserByLogin(login);

      var result = [404, angular.copy(notFound)]; 
      if(user) result = [200, angular.copy(user)];
      
      return result;
    });


  //--- internal process

  function getLoginFromURL(url) {
    var arr = url.split(/users\//);
    if(arr.length > 1) return arr[1];
    return null;
  }

  function findUserByLogin(login) {
    for(var i = 0, len = users.length; i < len; i++) {
      if(users[i].login === login) return users[i];
    }
    return null;
  }

  //--- database

  notFound = {
    "message": "Not Found",
    "documentation_url": "http://developer.github.com/v3"
  };

  users = [
{
  "login": "erkobridee",
  "id": 342471,
  "avatar_url": "https://2.gravatar.com/avatar/92b450d01dc722f2de742f1cedfb5600?d=https%3A%2F%2Fidenticons.github.com%2F1ab92526cff87cd4d33d464ed0091e6f.png",
  "gravatar_id": "92b450d01dc722f2de742f1cedfb5600",
  "url": "https://api.github.com/users/erkobridee",
  "html_url": "https://github.com/erkobridee",
  "followers_url": "https://api.github.com/users/erkobridee/followers",
  "following_url": "https://api.github.com/users/erkobridee/following{/other_user}",
  "gists_url": "https://api.github.com/users/erkobridee/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/erkobridee/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/erkobridee/subscriptions",
  "organizations_url": "https://api.github.com/users/erkobridee/orgs",
  "repos_url": "https://api.github.com/users/erkobridee/repos",
  "events_url": "https://api.github.com/users/erkobridee/events{/privacy}",
  "received_events_url": "https://api.github.com/users/erkobridee/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Erko Bridee",
  "company": null,
  "blog": "http://erkobridee.com",
  "location": "Rio de Janeiro / RJ / Brazil",
  "email": null,
  "hireable": false,
  "bio": null,
  "public_repos": 17,
  "followers": 51,
  "following": 32,
  "created_at": "2010-07-24T01:33:30Z",
  "updated_at": "2013-10-17T00:33:30Z",
  "public_gists": 30
},
{
  "login": "angular",
  "id": 139426,
  "avatar_url": "https://0.gravatar.com/avatar/f0d91e5cf8ad1ce7972cc486baa20c42?d=https%3A%2F%2Fidenticons.github.com%2Ff3377e1ac5fdd9183c13129960faedd7.png",
  "gravatar_id": "f0d91e5cf8ad1ce7972cc486baa20c42",
  "url": "https://api.github.com/users/angular",
  "html_url": "https://github.com/angular",
  "followers_url": "https://api.github.com/users/angular/followers",
  "following_url": "https://api.github.com/users/angular/following{/other_user}",
  "gists_url": "https://api.github.com/users/angular/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/angular/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/angular/subscriptions",
  "organizations_url": "https://api.github.com/users/angular/orgs",
  "repos_url": "https://api.github.com/users/angular/repos",
  "events_url": "https://api.github.com/users/angular/events{/privacy}",
  "received_events_url": "https://api.github.com/users/angular/received_events",
  "type": "Organization",
  "site_admin": false,
  "name": "Angular",
  "company": null,
  "blog": "angularjs.org",
  "location": "",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 35,
  "followers": 0,
  "following": 0,
  "created_at": "2009-10-13T22:16:19Z",
  "updated_at": "2013-10-17T00:38:34Z",
  "public_gists": 0
},
{
  "login": "jquery",
  "id": 70142,
  "avatar_url": "https://1.gravatar.com/avatar/6906f317a4733f4379b06c32229ef02f?d=https%3A%2F%2Fidenticons.github.com%2Ff426f04f2f9813718fb806b30e0093de.png",
  "gravatar_id": "6906f317a4733f4379b06c32229ef02f",
  "url": "https://api.github.com/users/jquery",
  "html_url": "https://github.com/jquery",
  "followers_url": "https://api.github.com/users/jquery/followers",
  "following_url": "https://api.github.com/users/jquery/following{/other_user}",
  "gists_url": "https://api.github.com/users/jquery/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/jquery/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/jquery/subscriptions",
  "organizations_url": "https://api.github.com/users/jquery/orgs",
  "repos_url": "https://api.github.com/users/jquery/repos",
  "events_url": "https://api.github.com/users/jquery/events{/privacy}",
  "received_events_url": "https://api.github.com/users/jquery/received_events",
  "type": "Organization",
  "site_admin": false,
  "name": "jQuery JavaScript Library",
  "company": null,
  "blog": "http://jquery.com/",
  "location": "Boston, MA",
  "email": null,
  "hireable": null,
  "bio": null,
  "public_repos": 44,
  "followers": 2,
  "following": 0,
  "created_at": "2009-04-03T15:18:52Z",
  "updated_at": "2013-10-17T00:48:19Z",
  "public_gists": 0
},
{
  "login": "123",
  "id": 27384,
  "avatar_url": "https://2.gravatar.com/avatar/81dc9bdb52d04dc20036dbd8313ed055?d=https%3A%2F%2Fidenticons.github.com%2F7fcbff32ba6970c5a98efe594b17c6a8.png",
  "gravatar_id": "81dc9bdb52d04dc20036dbd8313ed055",
  "url": "https://api.github.com/users/123",
  "html_url": "https://github.com/123",
  "followers_url": "https://api.github.com/users/123/followers",
  "following_url": "https://api.github.com/users/123/following{/other_user}",
  "gists_url": "https://api.github.com/users/123/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/123/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/123/subscriptions",
  "organizations_url": "https://api.github.com/users/123/orgs",
  "repos_url": "https://api.github.com/users/123/repos",
  "events_url": "https://api.github.com/users/123/events{/privacy}",
  "received_events_url": "https://api.github.com/users/123/received_events",
  "type": "User",
  "site_admin": false,
  "public_repos": 1,
  "followers": 0,
  "following": 0,
  "created_at": "2008-10-03T08:35:28Z",
  "updated_at": "2013-10-11T17:24:20Z",
  "public_gists": 0
}
  ]; // end users array

});