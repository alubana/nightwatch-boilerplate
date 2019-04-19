/* eslint-disable no-console */
'use strict';

/**
 * Asserts against multiple elements found using css selector. expects
 * an array of texts.
 * @param selector
 * @param expectedTextArray
 */
exports.assertion = function elementText(selector, expectedTextArray) {

  this.message = null;
  this.expected = true;
  let actualTexts = [];
  let onlyOnce = true;

  this.pass = function pass(value) {
    return value === this.expected;
  };

  this.value = function value(result) {
    return result;
  };

  this.command = function command(callback) {
    let comparisonResult = true;
    let elementsID;
    const _self = this;

    this
            .api
            .elements('css selector', selector, function (result) {
              elementsID = result.value;
            })
            .perform((done) => {
              elementsID.forEach(function (elm, index) {
                _self.api.elementIdText(elm.ELEMENT, function (actualText) {
                  if(onlyOnce) {
                    actualTexts.push(actualText.value);
                  }
                  let expectedText = expectedTextArray[index];
                  if (actualText.value !== expectedText) {
                    comparisonResult = false;
                  }
                });
              });
              done();
            })
            .perform((done)=> {
              onlyOnce = false;
              this.message = `Element: ${selector} Expected text: ${JSON.stringify(expectedTextArray)} and Actual text: ${JSON.stringify(actualTexts)}`;
              callback(comparisonResult && (expectedTextArray.length === actualTexts.length));
              done();
            });
    return this;
  };
};
