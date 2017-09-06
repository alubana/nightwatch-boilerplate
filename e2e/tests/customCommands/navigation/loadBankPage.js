/**
 *
 * @param page
 * @param acceptAlert: pass true when loading page that causes/has alert
 * @returns {exports}
 */
exports.command = function (page = this.globals.pages.reactBank.landing, acceptAlert = false) {
    const _self = this;
    const url = _self.globals.REACT_BANK_APP + page;

    _self.loadAppPage(url, acceptAlert, '#root');
    return this;
};