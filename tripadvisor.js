// Remove some elements that distract from content.
var removeExtraElements = function() {
  var checkRates = document.getElementsByClassName('integrated_cr_display');
  if (checkRates) {
    for (var i = 0, l = checkRates.length; i < l; i++) {
      checkRates[i].parentNode.removeChild(checkRates[i]);
    }
  }
  var footerPromo = document.getElementById('TM_FTR');
  if (footerPromo) {
    footerPromo.parentNode.removeChild(footerPromo);
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
  var pageWidth = window.innerWidth - 200;
  var columnWidth = pageWidth - 200;
  var reviewWidth = columnWidth - 314;
  var entryWidth = reviewWidth - 120;

  var newCss = [
      // Keep sorted to help merge diffs.
      '#BODYCON .balance { width: ' + reviewWidth + 'px; }',
      '#BODYCON { width: ' + columnWidth + 'px; }',
      '#PAGE { width: ' + pageWidth + 'px; }',
      '.basic_review .col2of2 { width: ' + entryWidth + 'px; }',
      '.booking.bookinline { display: none; }',
      '.date.reviewItem { color: #666; font-weight: bold; }',
      '.entry { width: ' + entryWidth + 'px; }',
      '.gridA { width: ' + columnWidth + 'px; }',
      '.helpful,.stayNfo,.recoQstn.reviewItem { color: #666; font-size: 0.75em; }'
  ].join('');
  var styleNode = document.createElement('style');
  styleNode.type = 'text/css';
  styleNode.appendChild(document.createTextNode(newCss));
  document.getElementsByTagName('head')[0].appendChild(styleNode);
};

var isSupportedPage = function() {
  return document.URL.indexOf("Hotel_Review") != -1;
};

if (isSupportedPage()) {
  removeExtraElements();
  clickOnMoreLinks();
  resizePageElements();
}
