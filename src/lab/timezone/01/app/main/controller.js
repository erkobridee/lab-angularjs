(function() {
	'use strict';

	angular
		.module( 'App' )
		.controller( 'MainCtrl', MainCtrl );

		MainCtrl.$inject = [ '$scope' ];

		function MainCtrl( $scope ) {

		  //# i18n para os dias da semana. Mais exemplos em http://momentjs.com/docs/#/i18n/changing-locale/
      moment.locale('pt_BR', {
        weekdays : [
          'Domingo', 
          'Segunda-Feira', 
          'Terça-Feira', 
          'Quarta-Feira', 
          'Quinta-Feira', 
          'Sexta-Feira', 
          'Sábado'
        ]
      });

      // Definindo locale de todas as formatações de data.
      moment.locale(navigator.language);

      // Formata a data e hora atuais
      $scope.exemplo1 = moment().format('DD/MM/YYYY HH:mm:ss Z');

      // Formata a data e hora atuais no formato UTC (+00:00)
      $scope.exemplo2 = moment().utc().format('DD/MM/YYYY HH:mm:ss Z');

      // Formata uma data a partir de uma data existente
      var data = new Date();
      $scope.exemplo3 = moment(data).format('DD/MM/YYYY HH:mm:ss Z');

      // Pega o dia da semana
      // Além de definir globalmente, você pode passar direto na função format
      $scope.exemplo4 = moment().format('dddd', navigator.language);

      // Valida se a data inserida está no padrão correto
      $scope.ValidarDataExemplo05 = function() {
        var isValid = moment($scope.exemplo5, 'DD/MM/YYYY', true).isValid();     
        $scope.exemplo5Result = isValid ? 'Data válida' : 'Data inválida';
      }

      // Data salva com utc padrão (+00:00)
      var dataUtcPadrao = '24/11/2014 12:29:39 +00:00';

      // Intancia uma data com valores existentes
      var dateUtc = moment.utc(dataUtcPadrao, 'DD/MM/YYYY HH:mm:ss Z');

      // Habilita uma flag para pegar a data local e não do utc
      dateUtc.local();

      // Formata a data
      $scope.exemplo6 = dateUtc.format('DD/MM/YYYY HH:mm:ss Z');
    }

})();
