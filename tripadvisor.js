/**
 * The unique namespace for all tripadvisor methods and internal state.
 * @type {Object}
 */
contentIsKing.tripadvisor = {};

/**
 * Custom resize logic for tripadvisor.
 * @private
 */
contentIsKing.tripadvisor.resizePageElements_ = function() {
  var pageWidth = window.innerWidth - 200;
  var columnWidth = pageWidth - 200;
  var reviewWidth = columnWidth - 314;
  var entryWidth = reviewWidth - 120;

  contentIsKing.injectCssIntoDom([
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
  ].join(''));
};


/**
 * @return {boolean} Whether the current url is a supported page.
 */
contentIsKing.tripadvisor.isSupportedPage_ = function() {
  return document.URL.indexOf("Hotel_Review") != -1;
};


if (contentIsKing.tripadvisor.isSupportedPage_()) {
  contentIsKing.hideExtraElements(
      ['TM_FTR', 'FLIGHTS_CTA_AJAX'],
      ['integrated_cr_display']);
  contentIsKing.clickOnElements(
      null,
      ['moreLink']);
  contentIsKing.tripadvisor.resizePageElements_();
}
