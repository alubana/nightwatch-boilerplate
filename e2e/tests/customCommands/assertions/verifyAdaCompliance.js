const _ = require('lodash');

exports.command = function ( {selector, fileName} ) {
  const _self = this;
    // let {selector, fileName, settings, message} = visualDiffData;

    //Set default threshold to 0.0
    // settings = _.isEmpty(settings) ? null: _.trim(settings);
  selector = _.isEmpty(selector) ? _self.globals.rootAppSelector: _.trim(selector);

    // message = _.isEmpty(message) ? this.testcase : _.trim(message);

  _self.verify.screenshotIdenticalToBaseline(selector, fileName);
  return this;
};
