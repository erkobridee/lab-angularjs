define(function(require) {
  'use strict';

  	var module = require('./module');

  	module.controller( 'AboutCtrl', AboutCtrl );

  	AboutCtrl.$inject = [ '$scope', '$translatePartialLoader', '$translate' ];

  	function AboutCtrl($scope, $translatePartialLoader, $translate) {
  		$translatePartialLoader.addPart('about');
  		$translate.refresh();
  	}

});
