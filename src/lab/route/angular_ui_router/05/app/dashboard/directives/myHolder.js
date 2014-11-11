define(function(require) {
  'use strict';

  var module = require('../module');
  var Holder = require('holder');

  // https://stackoverflow.com/questions/21845998/make-holder-js-work-with-angular#21846591

  module.directive('myHolder', myHolder);

  //---

  function myHolder() {

    return {
      link: function(scope, element, attrs) {
        attrs.$set('data-src', attrs.myHolder);
        Holder.run({images:element.get(0), nocss:true});
      }
    };

  }

});
