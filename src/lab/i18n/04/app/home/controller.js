define(function(require) {
  'use strict';

  	var module = require('./module');

    module.controller( 'HomeCtrl', HomeCtrl );

    HomeCtrl.$inject = [ '$scope', '$translatePartialLoader', '$translate' ];
   
  	function HomeCtrl($scope, $translatePartialLoader, $translate) {
        $translatePartialLoader.addPart('home');
        $translate.refresh();
  	}

});
