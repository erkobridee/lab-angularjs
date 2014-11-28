define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DeviceCheckDesktopCtrl', DeviceCheckDesktopCtrl);

  //---

  DeviceCheckDesktopCtrl.$inject = ['DeviceCheckService'];

  function DeviceCheckDesktopCtrl(service) {
    var vm = this;

    vm.pageName   = 'Desktop Page';
    vm.type       = service.device.type;
    vm.userAgent  = service.device.userAgent;

  }

});
