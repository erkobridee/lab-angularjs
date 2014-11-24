define(function(require) {
  'use strict';
    
  var angular = require('angular');
                require('angularRoute');
                require('./../i18n/package');

  return angular.module('home', [ 
                  'ngRoute',
                  'translate'
                ]
          );

});