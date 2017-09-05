exports.command = function (selector) {

    this.waitForElementPresent(selector);

    this.getText(selector, function (result) {
        this.logger('Verifying ' + selector + ' is not null or undefined');
        (result) ? this.assert.ok(true) : this.assert.ok(false);
    });

    //verify if text does not contains undefined
    this.expect.element(selector).text.to.not.contains('undefined');

    //verify text does not contain html tags
    this.logger('verify text does not contain html tags');
    this.expect.element(selector).text.to.not.match(/<("[^"]*"|'[^']*'|[^'">])*>|&nbsp;/);
};