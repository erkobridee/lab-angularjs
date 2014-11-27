define(function(require) {
  'use strict';

  var module = require('./module');
  require('./resource');
  require('./controller');
  require('./routes');

  return module;

});
