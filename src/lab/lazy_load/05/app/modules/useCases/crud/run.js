define(function(require) {
  'use strict';

  var module = require('./module');

  module.run(runner);

  //---

  runner.$inject = ['MenuService'];

  function runner(menu) {

    console.log('crud is running');

    menu.add({
      label: 'Crud',
      state: 'crud'
    });

  }

});
