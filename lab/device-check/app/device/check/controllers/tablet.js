define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DeviceCheckTabletCtrl', DeviceCheckDesktopCtrl);

  //---

  DeviceCheckDesktopCtrl.$inject = ['DeviceCheckService'];

  function DeviceCheckDesktopCtrl(service) {
    var vm = this;

    vm.pageName   = 'Tablet Page';
    vm.type       = service.device.type;
    vm.userAgent  = service.device.userAgent;

  }

});
