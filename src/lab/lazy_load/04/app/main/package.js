define(function(require) {
  'use strict';

  var module = require('./module');

  require('./states');

  require('./lazyload');
  require('./services/lazyload');

  return module;

});
