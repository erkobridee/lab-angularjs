define(function(require) {
  'use strict';

  var angular = require('angular');
                require('angularRoute');
                require('./../i18n/package');

  return angular
          .module('about', [
                  'ngRoute',
                  'translate'
                ])

          .run(function($translatePartialLoader, $translate) {
            $translatePartialLoader.addPart('about');
            $translate.refresh();
          });

});
