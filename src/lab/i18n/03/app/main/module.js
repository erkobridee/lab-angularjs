define(
        [
          'angular',
          'angularRoute',
          './../i18n/require.load',
          './../home/require.load',
          './../about/require.load'
        ],

        function(ng) {
          'use strict';
          
          return ng.module('main',  
                [ 
                  'ngRoute',
                  'translate',
                  'home',
                  'about'
                ]
          );

});