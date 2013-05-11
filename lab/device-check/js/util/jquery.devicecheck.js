/*
inicialmente pensado em utilizar o modelo:
http://www.stoimen.com/blog/2009/07/16/jquery-browser-and-os-detection-plugin/

porém alterei para o modelo:
https://github.com/codefuze/js-mobile-tablet-redirect/blob/master/mobile-redirect.js
*/

(function() {
  var DeviceCheck = {

    init : function() {
      this.userAgent = navigator.userAgent.toLowerCase();
      this.mobileRegEx = (/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i);
      this.tabletRegEx = (/ipad|android 3|sch-i800|playbook|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i);

      this.check();
    },

    check : function() {
      this.isMobile = this.mobileRegEx.test(this.userAgent);
      this.isTablet = this.tabletRegEx.test(this.userAgent);

      if(this.isMobile) {
        this.type = 'mobile';
      } else if(this.isTablet) {
        this.type = 'tablet';
      } else {
        this.type = 'desktop';
      }
    }

  };

  DeviceCheck.init();

  window.$.device = {
    type : DeviceCheck.type
  };

})();