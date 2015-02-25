define(function(require) {
  'use strict';

  var module = require('./module');

  module.controller('PageCtrl', PageCtrl);

  //---

  PageCtrl.$inject = [ 'MultiPagesService' ];

  function PageCtrl( multipages ) {

    var vm = this;

    vm.title = 'Page';

    vm.model = {
      someValue : 'some value for page content',
      areaValue : 'page textarea value'
    };

    //---

    // controllerObject, fieldsArray
    multipages.set( vm, ['title', 'model'] );

  }

});
