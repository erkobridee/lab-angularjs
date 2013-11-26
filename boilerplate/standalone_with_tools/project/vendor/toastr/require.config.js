require({

  // define js scripts dependencies
  shim: {
    'vendor/toastr/toaster-ng.1.1.5': {
      deps: ['angular']
    }

  }

},

['require'], function(require) {

  console.log('vendor/toastr/toastr require.js config');

  require(['vendor/toastr/start']);

});