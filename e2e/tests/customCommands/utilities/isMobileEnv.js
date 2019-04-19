exports.command = function (fn) {
  const _self = this;
  return fn(_self.options.desiredCapabilities.platformName === 'iOS' || _self.options.desiredCapabilities.platformName === 'android');
};