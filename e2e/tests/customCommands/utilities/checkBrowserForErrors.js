exports.command = function () {
    const _self = this;

    _self.getLog('browser', function (logEntriesArray) {
        _self.logger('Checking browser for Javascript error/s and warning/s');

        if (logEntriesArray.length > 0) {
            console.warn('+++++ ATTENTION: Error/Warning found = ' + logEntriesArray.length + ' +++++');
            logEntriesArray.forEach(function (log) {
                _self.logger('[' + log.level + '] ' + log.timestamp + ' : ' + log.message);

                //assert on errors only
                _self.verify.ok(log.level !== 'ERROR', 'Checking for Javascript error/s')
            });

        } else {
        }
    });

    return this;
};