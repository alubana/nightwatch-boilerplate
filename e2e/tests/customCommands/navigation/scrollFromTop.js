exports.command = function (selector, scroll) {
    const _self = this;
    _self.waitForElementVisible(selector, 5000);
    _self.execute("document.querySelector('" + selector + "').scrollTop = " + scroll);
    _self.waitForJavascript();

    return this;
};
