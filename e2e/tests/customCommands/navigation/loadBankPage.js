const _ = require('lodash');

/**
 *
 * @param pageData:
 * @returns {exports}
 */
exports.command = function (pageData = {}) {
  const _self = this;
  let {page, acceptAlert, pageLocator} = pageData;

  page = _.isEmpty(page) ? '' : _.trim(page);
  pageLocator = _.isEmpty(pageLocator) ? '#root' : _.trim(pageLocator);
  acceptAlert = _.isEmpty(acceptAlert) ? false : _.trim(acceptAlert);

  const url = _self.globals.APP_BASE_URL + page;

  _self.loadAppPage(url, acceptAlert, pageLocator);
  return this;
};
