define(function(require) {
  'use strict';

  var module = require('./module');
  require('./user/controller');
  require('./user/resource');
  require('./routes');

  return module;

});
