(function() {
  'use strict';

  angular
    .module('App', ['pascalprecht.translate'])
    .config(translateProvider);

  //---

  translateProvider.$inject = ['$translateProvider'];

  function translateProvider($translateProvider) {

    $translateProvider.translations('en', {
      'TITLE': 'Hello',
      'FOO': 'This is a paragraph'
    });

    $translateProvider.translations('pt', {
      'TITLE': 'Olá',
      'FOO': 'Isso é um paragrafo'
    });

    $translateProvider.preferredLanguage('pt');

  }

})();
