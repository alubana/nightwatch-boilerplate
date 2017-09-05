/* eslint-disable consistent-return,max-statements */

/**
 * @author alubana
 *  Wait for 1000ms implictly and then return, when JS and JQuery is finished loading (Retry 5 times in 1000ms intervals)
 * @returns {exports} custom command to the client for chaining
 */
exports.command = function () {
//Wait for document to be ready for ~5000ms
    const client = this;
    client.pause(1000);
    for (var i = 5; i >= 1; i -= 1) {
        const isJsReady = client
            .execute("return document.readyState;", function (result) {
                return result.value === "complete";
            });

        // const isJqueryReady = client
        //     .execute("return jQuery.active;", function (result) {
        //         return result.value === "complete";
        //     });


        if (isJsReady /* && isJqueryReady*/) {
            client.logger('Document is Ready');
            break;
        }

        client.logger("Document not ready. Waiting for another " + i + " seconds")
            .pause(1000)
    }
    return this; //for chaining on client/browser object
};
