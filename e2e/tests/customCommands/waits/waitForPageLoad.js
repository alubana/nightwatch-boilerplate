const _ = require('lodash');

exports.command = function (pageLocator) {
  const _self = this;
  this
        .waitForJavascript();

    // Locator for the element to be waited on the page after a page load. Defaults to Root App element
  const locator = _.isEmpty(pageLocator) ? _self.globals.rootAppSelector : _.trim(pageLocator);
  this.waitForElementVisible(locator, _self.globals.waitForPageLoadTimeout, () => {
  });

  return this;
};
