module.exports = {
    elements: {
        title: {
            selector: 'h1'
        },
        withdrawButton: {
            selector: 'button.red'
        },
        depositButton: {
            selector: 'button.green'
        },
        tableHeaders: {
            selector: 'table th:nth-of-type(%s)'
        },
    },
    commands: [
        {
            verifyTransactionInfo: function (rowIndex = 1, type, date, amount) {
                const _self = this;

                [
                    type,
                    date,
                    amount
                ].forEach(function (result, index) {
                    //for selector with multiple %s, use directly instead of el
                    _self.expect.element(`tr:nth-child(${rowIndex}) td:nth-child(${index + 1})`).text.to.be.equal(result);
                });
            }
        }
    ],
    props: {
        title: 'Transactions'
    }
};