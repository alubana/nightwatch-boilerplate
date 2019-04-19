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
    modalHeader: {
      selector: 'div.header'
    },
    amountInput: {
      selector: 'input[name=amount]'
    },
    approveButton: {
      selector: '.positive'
    },
    cancelButton: {
      selector: 'div.ui.red'
    }
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
      },

      clickDepositButton: function (){
        const _self = this;
        _self.waitForElementVisible('@depositButton');
        _self.click('@depositButton');
        _self.waitForElementVisible('@modalHeader');
      },

      clickTransactionButton: function (transaction){
        const _self = this;
        _self.click(transaction);
        _self.waitForElementVisible('@modalHeader');
      }
    }
  ],
  props: {
    title: 'Transactions'
  }
};
