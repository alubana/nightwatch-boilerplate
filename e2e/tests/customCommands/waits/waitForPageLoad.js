exports.command = function (appID = '#app') {
    const _self = this;

    _self
        .waitForJavascript()
        .waitForElementVisible(appID);

    return this;
};