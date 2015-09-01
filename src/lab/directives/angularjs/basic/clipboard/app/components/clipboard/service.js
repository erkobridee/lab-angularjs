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

    //------------------------------------------------------------------------//

    var check = {};

    check.browserInfo = (function(){
      var navigator = $window.navigator,
          ua = navigator.userAgent, tem,
          M = ua.match( /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i ) || [];
      if( /trident/i.test( M[1] ) ) {
        tem =  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + ( tem[1] || '' );
      }
      if( M[1] === 'Chrome' ){
        tem = ua.match( /\bOPR\/(\d+)/ );
        if( tem !== null ) {
          return 'Opera ' + tem[1];
        }
      }
      M = M[2] ? [M[1], M[2]] : [ navigator.appName, navigator.appVersion, '-?' ];
      if( ( tem = ua.match( /version\/(\d+)/i ) ) !== null ) {
        M.splice( 1, 1, tem[1] );
      }
      return {
        name: M[0].toLowerCase(),
        version: +M[1]
      };
    })();

    console.log( check.browserInfo );

    check.isMac = ( $window.navigator.userAgent.indexOf( 'Mac OS' ) !== -1 );

    check.hasSupport = (function checkIfHasSupport(){
      if(
        doc0.getSelection &&
        doc0.createRange &&
        $window.ClipboardEvent
      ){
        if( check.browserInfo.name === 'firefox' ) {
          return ( check.browserInfo.version > 40 ? true : false );
        }
        return true;
      }
      return false;
    })();

    //------------------------------------------------------------------------//

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

    function displayPrompt( textToCopy ) {
      var helpText = '';
      if( check.isMac ) {
        helpText += 'Command';
      } else {
        helpText += 'Control';
      }
      helpText += ' + C and ENTER to copy.';
      return (
        $window.prompt( helpText, textToCopy ) === textToCopy
      );
    }

    function copyText( text ) {
      if( check.hasSupport ) {
        var node = createNode( text );
        doc0.body.appendChild( node );
        copyNode( node );
        doc0.body.removeChild( node );
      } else {
        if( !displayPrompt( text ) ) {
          throw new Error('clipboard copy failed');
        }
      }
    }

    //------------------------------------------------------------------------//

    // API
    return {
      directiveCopyText: copyText,
      check: check
    };

  }

  Factory.$inject = [ '$window', '$document' ];

  //---

  angular
    .module('components.clipboard')
    .factory('$clipboard', Factory);

})();
