exports.command = function () {
    const _self = this;
    _self
        .pause(10)
        .verify.elementNotPresent('.gifting-spinner');

    return this;
};