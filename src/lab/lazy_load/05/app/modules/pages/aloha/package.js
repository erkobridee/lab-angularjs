define(function(require) {
  'use strict';

  var module = require('./module');

  require('./controller');
  require('./states');
  require('./run');

  return module;

});
