exports.command = function (url, acceptAlert, pageLocator) {
  const _self = this;

  _self.logger(`  Loading Page: ${url}`);
  _self.url(url);

  if (acceptAlert) {
    _self.acceptAlert();
  }
  _self.waitForPageLoad(pageLocator);

  if (_self.globals.checkBrowserForErrors) {
    _self.checkBrowserForErrors();
  }
  return this;
};
