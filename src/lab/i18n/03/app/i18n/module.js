define(
        [
          'angular',
          'angularTranslate'
        ],

        function(ng) {
          'use strict';
          
          return ng.module('translate',  
                [ 
                  'pascalprecht.translate' 
                ]
          );

});