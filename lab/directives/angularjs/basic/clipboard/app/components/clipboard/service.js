(function() {
  'use strict';

  /*
    Browser support: Chrome 43+, Firefox 41+, Opera 29+ and IE10+

    Cut and Copy Commands - HTML5 Rocks
    http://updates.html5rocks.com/2015/04/cut-and-copy-commands

    Document.execCommand()
    https://developer.mozilla.org/en-US/docs/Web/API/document/execCommand

    execCommands supported in your browser
    http://codepen.io/netsi1964/full/QbLLGW/

    execCommand compatibility
    http://www.quirksmode.org/dom/execCommand.html

    Clipboard API and events | W3C
    http://www.w3.org/TR/clipboard-apis/

    Clipboard API | Can I Use
    http://caniuse.com/#search=clipboard
  */

  function Factory( $window, $document ) {

  var doc0 = $document[0];

  //---

  function createNode( text ) {
    var node = doc0.createElement( 'span' );
    node.style.position = 'absolute';
    node.style.left = '-10000px';
    node.textContent = text;
    return node;
  }

  function copyNode( node ) {
    // Set inline style to override css styles
    doc0.body.style.webkitUserSelect = 'initial';

    var selection = doc0.getSelection();
    selection.removeAllRanges();

    var range = doc0.createRange();
    range.selectNodeContents( node );
    selection.addRange( range );

    // this executes the copy to clipboard
    doc0.execCommand( 'copy' );

    selection.removeAllRanges();

    // Reset inline style
    doc0.body.style.webkitUserSelect = '';
  }

  function copyText( text ) {
    var node = createNode( text );
    doc0.body.appendChild( node );
    copyNode( node );
    doc0.body.removeChild( node );
  }

  //---

  var hasSupport = (function checkIfHasSupport(){
    if(
      doc0.getSelection &&
      doc0.createRange &&
      $window.ClipboardEvent
    ){
      return true;
    }
    return false;
  })();

  //------------------------------------------------------------------------//

  // API
  return {
    directiveCopyText: copyText,
    hasSupport: hasSupport
  };

  }

  Factory.$inject = [ '$window', '$document' ];

  //---

  angular
    .module('components.clipboard')
    .factory('$clipboard', Factory);

})();
