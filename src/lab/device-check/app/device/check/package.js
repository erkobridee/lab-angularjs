define(function(require) {
  'use strict';

  var module = require('./module');
  require('./service');
  require('./controllers/check');
  require('./controllers/desktop');
  require('./controllers/mobile');
  require('./controllers/tablet');
  require('./routes');

  return module;

});
