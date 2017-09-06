const util = require('util');

module.exports = {
    elements: {
        title: {
            selector: 'h1'
        },
        tableHeaders: {
            selector: 'table th:nth-of-type(%s)'
        },
        accountNumberLinkByIndex: {
            selector: 'tr:nth-child(%s) td:nth-child(1) a'
        }
    },
    commands: [
        {
            /*
            el function must be declared inside POM. It gives advantage of using the selector using @name .
             */
            el: function (elementName, child) {
                const element = this.elements[elementName.slice(1)];
                return util.format(element.selector, child);
            },
            verifyTableHeaders: function () {
                const _self = this;

                [
                    'Account Number',
                    'Account Type',
                    'Balance'
                ]
                    .forEach(function (result, index) {
                        //Use of el method. Can only have a single index field %s
                        _self.expect.element(_self.el('@tableHeaders', index + 1)).text.to.be.equal(result);
                    });
            },
            verifyAccountInfo: function (rowIndex = 1, accountNumber, accountType, balance) {
                const _self = this;

                [
                    accountNumber,
                    accountType,
                    balance
                ].forEach(function (result, index) {
                    //for selector with multiple %s, use directly instead of el
                    _self.expect.element(`tr:nth-child(${rowIndex}) td:nth-child(${index + 1})`).text.to.be.equal(result);
                });
            },
            /*
            A function, which performs an action on an element, must wait for the action to be completed.
            Following function clicks on a link, and waits for the next page to be loaded using a unique selector
             */
            clickAccountNumberByIndex: function (index = 1) {
                const transactionsPage = this.api.page.Transactions();
                const _self = this;
                const locator = _self.el('@accountNumberLinkByIndex', index);

                this.waitForElementVisible(locator);
                this.click(locator);

                //Wait for next page load by waiting for a unique element on the next page.
                //withdraw button is declared in Transcations.js pom, therefore needs it's own page object to be called.
                transactionsPage.waitForElementVisible('@withdrawButton');
            }
        }
    ],
    props: {
        title: 'Accounts'
    }
};