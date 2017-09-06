exports.command = function (selector) {
    const _self = this;

    this.waitForElementPresent(selector);

    _self.getLocationInView(selector, function (result) {
        _self.logger(`scroll and then click on ${selector}`);
        _self.execute(`scrollTo(${result.value.x} , ${result.value.y - 65})`); // 65 Offset
        _self.waitForElementVisible(selector, 4000);
        _self.click(selector);
    });
    return this;
};