define(function(require) {
    'use strict';
        
    var angular = require('angular');
                  require('angularTranslate');
                  //require('angularTranslateStorageLocal');
          
    return angular.module('translate', [ 
                  'pascalprecht.translate'
                ]
          );

});
