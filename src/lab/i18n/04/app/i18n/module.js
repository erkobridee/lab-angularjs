define(function(require) {
  'use strict';
        
  var angular = require('angular');
    				    require('angularTranslate');
                require('angularTranslateLoaderPartial');
          
  return angular
    		  .module('translate', [ 
                  'pascalprecht.translate'
              ]);

});
