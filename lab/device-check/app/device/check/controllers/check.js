define(function(require) {
  'use strict';

  var module = require('../module');

  module.controller('DeviceCheckCtrl', CheckDeviceCtrl);

  //---

  CheckDeviceCtrl.$inject = ['$location', 'DeviceCheckService'];

  function CheckDeviceCtrl($location, service) {
    var vm = this;

    console.log('DeviceCheckService.device:');
    console.log(service.device);

    $location.path(['device', service.device.type, ''].join('/'));

  }

});
