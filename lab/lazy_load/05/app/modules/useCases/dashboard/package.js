define(function(require) {
  'use strict';

  var module = require('./module');

  require('./controllers/main');
  require('./controllers/sidebar');
  require('./controllers/overview');
  require('./controllers/reports');
  require('./controllers/analytics');
  require('./controllers/export');

  require('./directives/myHolder');

  require('./states');
  require('./run');

  return module;

});
