exports.command = function (selector) {
  const _self = this;

  this.waitForElementPresent(selector, _self.globals.waitForConditionTimeout, false,  function () {
    _self.getLocationInView(selector, function (result) {
      _self.logger(`scroll to ${selector}`);
      _self.execute(`scrollTo(${result.value.x} , ${result.value.y - 65})`); // 65 Offset
    });
  });



};
