/* eslint-disable no-unused-vars */
var util = require('util');
var WaitForElementVisible = require('nightwatch/lib/api/element-commands/waitForElementVisible');

function WaitForElementClickable() {
  WaitForElementVisible.call(this);
  this.expectedValue = 'clickable';
}

util.inherits(WaitForElementClickable, WaitForElementVisible);

WaitForElementClickable.prototype.elementFound = function(result, now) {
  return this.isClickable();
};

WaitForElementClickable.prototype.elementClickable = function(result, now) {
  var defaultMsg = 'Element <%s> was clickable after %d milliseconds.';
  return this.pass(result, defaultMsg, now - this.startTimer);
};

WaitForElementClickable.prototype.elementNotClickable = function(result, now) {
  if (now - this.startTimer < this.ms) {
    this.reschedule('isClickable');
    return this;
  }

  var defaultMsg = 'Timed out while waiting for element <%s> to be clickable for %d milliseconds.';
  return this.fail(result, 'not clickable', this.expectedValue, defaultMsg);
};

WaitForElementClickable.prototype.isClickable = function() {
  var self = this;
  this.protocol.elementIdEnabled(this.element, function(result) {
    var now = new Date().getTime();
    if (result.status === 0 && result.value === true) {
            // element is enabled
      return self.elementClickable(result, now);
    }

    if (result.status === -1 && result.errorStatus === 10) {
      return self.checkElement();
    }

    return self.elementNotClickable(result, now);
  });
};

module.exports = WaitForElementClickable;
