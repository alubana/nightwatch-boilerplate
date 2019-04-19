exports.command = function (selector) {
  const _self = this;


  this.waitForElementVisible(selector, _self.globals.waitForConditionTimeout, false, function() {
    _self.moveToElement(selector, 10, 10, function () {
      _self.scrollToSelector(selector);
      _self.click(selector, function (args) {
        if (args.status === 0) {
          _self.logger('Successfully clicked ' + selector);
          _self.waitForAnimation();

        }
        else {
          _self.logger('Failed to clicked ' + selector);
        }
      });
    });

  }, 'Special Click on %s after %d ms');

  return this;
};
