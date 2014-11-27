define(function(require) {

  var module = require('./module');
  require('./controller');
  require('./routes');
  require('./run');

  return module;

});
