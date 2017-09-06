/* eslint-disable no-console */
exports.command = function (message) {
    return this.perform(function () {
        console.log(message);
    });
};