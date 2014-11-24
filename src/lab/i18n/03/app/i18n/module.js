define(function(require) {
  'use strict';

  var angular = require('angular');
                require('angularTranslate');

  return angular.module('translate', [
                    'pascalprecht.translate'
                  ]
          );

});
