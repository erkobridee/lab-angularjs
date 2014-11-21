(function() {
	'use strict';

	angular
		.module( 'App' )
		.controller( 'MainCtrl', MainCtrl );

		MainCtrl.$inject = [ '$scope' ];

		function MainCtrl( $scope ) {
			
			var today 	 = new Date(),
				language = navigator.language;

			$scope.data = moment.utc().format();

    	}

})();
