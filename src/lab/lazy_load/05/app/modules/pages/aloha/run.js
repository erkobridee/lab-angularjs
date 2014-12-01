define(function(require) {
  'use strict';

  var module = require('./module');

  module.run(runner);

  //---

  runner.$inject = ['MenuService'];

  function runner(menu) {

    console.log('aloha is running');

    menu.add({
      label: 'Aloha',
      state: 'aloha'
    });

  }

});
