define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controllers/home');
  require('./routes');

  return module;

});
