exports.command = function (selector = 'body', scroll = 5000) {
  const _self = this;
  _self.waitForElementPresent(selector);
  _self.execute(`document.querySelector('${selector}').scrollTop = ${scroll}`);
  _self.waitForJavascript();

  return this;
};
