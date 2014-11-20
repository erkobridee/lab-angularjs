define(
        [
          'angular',
          'angularRoute',
          'angularTranslate'
        ],

        function(ng) {
          'use strict';
          
          return ng.module('about',  
                [ 
                  'ngRoute',
                  'pascalprecht.translate'
                ]
          );

});