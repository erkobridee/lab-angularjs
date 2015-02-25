define(function(require) {
  'use strict';

  var RESIZE_WIDTH_TO = 250;
  var RESIZE_HEIGTH_TO = 200;

  var docBody = document.body;

  // http://caniuse.com/#feat=canvas [ not work on IE8 ]
  // https://github.com/niklasvh/html2canvas/tree/0.5.0-alpha2
  window.html2canvas = require('html2canvas');

  var resample_hermite = require('./resample_hermite');

  //---

  var service = {
    take: take,
    thumbnail: thumbnail
  };

  return service;

  //---

  /**
    take screenshot from document body

    return {promise} resolve {canvas}
    */
  function take() {

    return html2canvas( docBody );

  }

  /**
    resize canvas to new size

    @param canvas {canvas}
    @param toWidth {number}
    @param toHeight {number}

    return {canvas}
    */
  function resize(canvas, toWidth, toHeight) {

    var oldWidth = canvas.width;
    var oldHeight = canvas.height;

    resample_hermite( canvas, oldWidth, oldHeight, toWidth, toHeight );

  }

  /**
    @param width {number}
    @param height {number}

    @return {promise} resolve {canvas}
    */
  function thumbnail( width, height ) {

    width = width || RESIZE_WIDTH_TO;
    height = height || RESIZE_HEIGTH_TO;

    return take()
      .then(function( canvas ) {

        resize( canvas, width, height );

        return canvas;

      });

  }

});
