/**
 * The unique namespace for all jezebel methods and internal state.
 * @type {Object}
 */
contentIsKing.jezebel = {};

/**
 * Custom resize logic for tripadvisor.
 * @private
 */
contentIsKing.jezebel.resizePageElements_ = function() {
  var pageWidth = window.innerWidth - 300;
  var columnWidth = pageWidth - 20;
  var reviewWidth = columnWidth - 350;

  contentIsKing.injectCssIntoDom([
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
  ].join(''));
};


/**
 * @return {boolean} Whether the current url is a supported page.
 */
contentIsKing.jezebel.isSupportedPage_ = function() {
  return true;
};


if (contentIsKing.jezebel.isSupportedPage_()) {
  contentIsKing.hideExtraElements(
      ['rightwrapper'],
      null)
  contentIsKing.jezebel.resizePageElements_();
}
