define(function(require) {
  'use strict';

  var module = require('./module');

  require('./storage');
  require('./service');

  return module;

});
