/**
 * switch to a window with index number
 * @author alubana
 * @param index represents the window now as a number. Eg 0 for primary window and 1 for secondary window.
 * @returns {exports}
 */
exports.command = function (index) {
    const client = this;

    client.window_handles(function (result) {
        var handle = result.value[index];
        client.switchWindow(handle);
    });
    client.waitForJavascript();
    return this;
};