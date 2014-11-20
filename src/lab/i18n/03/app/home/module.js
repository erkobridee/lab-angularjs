define(
        [
          'angular',
          'angularRoute',
          'angularTranslate'
        ],

        function(ng) {
          'use strict';
          
          return ng.module('home',  
                [ 
                  'ngRoute',
                  'pascalprecht.translate'
                ]
          );

});