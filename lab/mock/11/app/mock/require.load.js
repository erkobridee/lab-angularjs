define(
// require.js dependency injection
[
  './require.config',
  
  './module',
  './backend',

    // load mock's
  './allow-pass-jsonp',

  '../users/mock/url-interceptors',
  '../github/user/mock/require.load'

], 

// require.js module scope
function() {});