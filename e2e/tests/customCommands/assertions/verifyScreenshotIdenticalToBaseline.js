const _ = require('lodash');

exports.command = function ( {selector, fileName = `${this.currentTest.group}_${selector}`, settings} ) {
  const _self = this;
  selector = _.isEmpty(selector) ? _self.globals.rootAppSelector: _.trim(selector);
  _self.verify.screenshotIdenticalToBaseline(selector, fileName, settings);
  return this;
};
