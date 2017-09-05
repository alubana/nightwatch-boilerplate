/**
 *
 * @param page
 * @param acceptAlert: pass true when loading page that causes/has alert
 * @returns {exports}
 */
exports.command = function (page, acceptAlert) {
    const _self = this;
    const url = _self.globals.uri.accountHolderApp + _self.globals.uri.ahBrandPath + page;

    _self.loadAppPage(url, acceptAlert);
    return this;
};