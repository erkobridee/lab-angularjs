define(function(require) {
  'use strict';

  var module = require('./module');

  module.run(runner);

  //---

  runner.$inject = ['MenuService'];

  function runner(menu) {

    console.log('dashboard is running');

    menu.add({
      label: 'Dashboard',
      state: 'dashboard'
    });

  }

});
