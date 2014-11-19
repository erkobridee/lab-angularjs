define(function(require) {
  'use strict';

  var module = require('./module');
  require('./controller');
  require('./factory');
  require('./filter');
  require('./service');
  require('./routes');
  require('./directives/depWelcome');
  require('./directives/depWidgetInline');
  require('./directives/depWidgetOutline');

  return module;

});
