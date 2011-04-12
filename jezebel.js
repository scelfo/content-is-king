// Remove some elements that distract from content.
var removeExtraElements = function() {
  var rightWrapper = document.getElementById('rightwrapper');
  if (rightWrapper) {
    rightWrapper.parentNode.removeChild(rightWrapper);
  }
};


// Add a click function on every html element so that script can fake a click.
var clickOnMoreLinks = function() {
  HTMLElement.prototype.click = function() {
    var evt = this.ownerDocument.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, this.ownerDocument.defaultView,
        1, 0, 0, 0, 0, false, false, false, false, 0, null);
    this.dispatchEvent(evt);
  };

  var moreLinks = document.getElementsByClassName('moreLink');
  if (moreLinks) {
    for (var i = 0, l = moreLinks.length; i < l; i++) {
      var cmd = moreLinks[i].click();
    }
  }
};


// Resize some elements on the page.
var resizePageElements = function() {
  var pageWidth = window.innerWidth - 300;
  var columnWidth = pageWidth - 20;
  var reviewWidth = columnWidth - 350;

  var newCss = [
      // Keep sorted to help merge diffs.
      '#class_pager.gmgrid.grid-2 { width: 100%; }',
      '#class_pager.gmgrid.grid-full { width: 100%; }',
      '#comments { width: 100%; }',
      '#main-container > .inner { width: 100%; border: none; }',
      '#postTransitionOverlay { width: 100%; }',
      '.chrome { background-repeat: repeat-x; }',
      '.col-excerpt.gmg-1.omega { width: ' + reviewWidth + 'px }',
      '.comment { width: 100%; }',
      '.container { width: ' + pageWidth + 'px; }',
      '.gmgrid .grid-full { width: 100%; }',
      '.gmgrid { width: ' + columnWidth + 'px; }',
      '.sitescontainer { margin: 0 auto; float: none; }',
      '.thread .replies { width: ' + columnWidth + 'px; padding-right: 20px; }',
      '.thread { width: ' + columnWidth + 'px; padding-right: 20px; }',
      '.threadnav { width: 100%; }',
      '.threadnav.chrome.tc.cn_thread_firstpage { width: 100%; }'
  ].join('');
  var styleNode = document.createElement('style');
  styleNode.type = 'text/css';
  styleNode.appendChild(document.createTextNode(newCss));
  document.getElementsByTagName('head')[0].appendChild(styleNode);
};

var isSupportedPage = function() {
  return true;
};

if (isSupportedPage()) {
  removeExtraElements();
  clickOnMoreLinks();
  resizePageElements();
}
