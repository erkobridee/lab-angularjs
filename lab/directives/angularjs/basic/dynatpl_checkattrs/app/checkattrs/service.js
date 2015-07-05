(function() {
  'use strict';

  angular
    .module('app')
    .factory('CheckAttrsService', CheckAttrsService);

  //---

  // CheckAttrsService.$inject = [];
  function CheckAttrsService() {

    var service = {};

    //------------------------------------------------------------------------

    var stringToHtmlStyle = (function() {

      function stringToHtmlStyle(value) {
        if(!value || !angular.isString(value)) {
          return '';
        }
        return value
          .match(/[A-Z]?[a-z]+|[0-9]+/g)
          .join('-')
          .toLowerCase();
      }
      return stringToHtmlStyle;

    })();
    service.stringToHtmlStyle = stringToHtmlStyle;

    //------------------------------------------------------------------------

    service.compile = (function() {

      function checkAttrsFn(directiveTag, attrsObj, attrsCheckArray) {
        var required = [];
        if(angular.isArray(attrsCheckArray)) {
          angular.forEach(attrsCheckArray, function(attr) {
            if(!attrsObj[attr]) {
              required.push(
                stringToHtmlStyle(attr)
              );
            }
          });
        }
        if(required.length > 0) {
          var msg = '';
          msg += stringToHtmlStyle(directiveTag);
          msg += ' required attributes: [' + required.join(', ') + '] not found';
          throw new Error(msg);
        }
      }

      return {
        checkRequiredAttrs : checkAttrsFn
      };

    })(); // @end: service.compile

    //------------------------------------------------------------------------

    service.template = (function() {

      function checkIfTrueAddFn() {
        var check;
        var add;
        /** arguments:
          *   [check, attrName, add]
          */
        if(arguments[2]) {
          check = arguments[0];
          check = check[arguments[1]];
          add = arguments[2];
        } else {
          check = arguments[0];
          add = arguments[1];
        }

        return check ? add : '';
      }

      function attrAddFn(checkObject, checkAttrName, addAttrName) {
        addAttrName = addAttrName || checkAttrName;
        return checkIfTrueAddFn(
          checkObject[checkAttrName],
          ' ' + addAttrName + '="' + checkObject[checkAttrName] + '" '
        );
      }

      return {
        attr : attrAddFn,
        checkAdd : checkIfTrueAddFn
      };
    })(); // @end: service.template

    //------------------------------------------------------------------------

    return service;

  }

})();
