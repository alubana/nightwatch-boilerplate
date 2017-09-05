exports.command = function (page, acceptAlert) {
    const _self = this;
    const url = _self.globals.uri.gifterApp + _self.globals.uri.gifterBrandPath + page;

    _self.loadAppPage(url, acceptAlert);

    return this;
};