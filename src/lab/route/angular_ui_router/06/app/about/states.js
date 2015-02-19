define(function(require) {
  'use strict';

  var module = require('./module');

  module.config(configure);

  //---

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('about', {
        url: '/about',
        views: {
          'master': {
            templateUrl   : 'app/main/templates/page_layout.html',
            controller    : 'AboutCtrl',
            controllerAs  : 'about'
          },
          'header@about': {
            templateUrl   : 'app/about/templates/header.html'
          },
          'content@about': {
            templateUrl   : 'app/about/templates/content.html' //,
            // controller    : 'AboutCtrl',
            // controllerAs  : 'about'
          }
        },
        onEnter: function() {
          console.log( 'about stateProvider on enter:' );
          console.log( this );
        },
        onExit: function() {
          console.log( 'about stateProvider on exit:' );
          console.log( this );
        }
      });

  }

});
