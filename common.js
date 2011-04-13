// Check to see if there is a problem with the namespace.  If so, alert the user.
if (typeof(contentIsKing) != 'undefined') {
  alert('Content is King can not cleanly operate on this website.  Please file' +
      'an issue at https://github.com/scelfo/content-is-king/issues');
}


/**
 * The unique namespace for all methods and internal state.
 * @type {Object}
 */
var contentIsKing = {};


/**
 * Hides elements from the page.
 * @param {?array.<string>} ids element ids to hide from the dom.
 * @param {?array.<string}} classnames class names of elements to hide from
 *     the dom.
 */
contentIsKing.hideExtraElements = function(ids, classNames) {
  if (ids) {
    for (var i = 0, l = ids.length; i < l; i++) {
      var elem = document.getElementById(ids[i]);
      if (elem) {
        elem.style.display = 'none';
      }
    }
  }
  if (classNames) {
    for (var i = 0, l = classNames.length; i < l; i++) {
      var elems = document.getElementsByClassName(classNames[i]);
      if (elems) {
        for (var j = 0, m = elems.length; j < m; j++) {
          elems[j].style.display = 'none';
        }
      }
    }
  }
};


/**
 * Whether click action has been attached to the HTMLElement prototype.
 * @type {?boolean}
 * @private
 */
contentIsKing.hasClickMethodBeenAdded_;


/**
 * Clicks elements on the page.
 * @param {?array.<string>} ids element ids to click.
 * @param {?array.<string}} classnames class names of elements to click.
 */
contentIsKing.clickOnElements = function(ids, classNames) {
  // Attach a click method on each html element only once.
  if (!contentIsKing.hasClickMethodBeenAdded_) {
    HTMLElement.prototype.contentIsKingClick = function() {
      var evt = this.ownerDocument.createEvent('MouseEvents');
      evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView,
          1, 0, 0, 0, 0, false, false, false, false, 0, null);
      this.dispatchEvent(evt);
    };
    contentIsKing.hasClickMethodBeenAdded_ = true;
  }

  if (ids) {
    for (var i = 0, l = ids.length; i < l; i++) {
      var elem = document.getElementById(ids[i]);
      if (elem) {
        elem.contentIsKingClick();
      }
    }
  }
  if (classNames) {
    for (var i = 0, l = classNames.length; i < l; i++) {
      var elems = document.getElementsByClassName(classNames[i]);
      if (elems) {
        for (var j = 0, m = elems.length; j < m; j++) {
          elems[j].contentIsKingClick();
        }
      }
    }
  }
};


/**
 * Adds a style block to the DOM to override css styles.
 * @param {string} newCss The CSS to inject into the DOM in a style block.
 */
contentIsKing.injectCssIntoDom = function(newCss) {
  var styleNode = document.createElement('style');
  styleNode.type = 'text/css';
  styleNode.appendChild(document.createTextNode(newCss));
  document.getElementsByTagName('head')[0].appendChild(styleNode);
};
