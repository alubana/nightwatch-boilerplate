exports.command = function (selector, partialPath) {
  const _self = this;
  const absPath = require('path').resolve(__dirname + partialPath);
  _self.logger(`Upload file ${absPath} to input ${selector}`);

  _self.setValue(selector, absPath);

  return this;
};