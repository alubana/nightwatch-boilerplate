exports.command = function () {
  const _self = this;
  _self
        .pause(100)
        .verify.elementNotPresent(_self.globals.loadingAnimationSelector);

  return this;
};
