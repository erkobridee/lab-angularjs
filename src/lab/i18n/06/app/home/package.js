define(function(require) {

  var module = require('./module');
  require('./controller');
  require('./routes');
  require('./i18n.config');

  return module;

});
