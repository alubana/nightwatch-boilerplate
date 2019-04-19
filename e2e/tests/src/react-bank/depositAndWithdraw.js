/**
 * Created by vsellath on 9/25/2017.
 */
module.exports = {
  '@tags': ['UI005', 'e2e'],
  disabled: false,

  before: (client) => {
    client
            .logger('Testing redux-bank end to end')
            .loadBankPage();
  },

  'Step 1: Get the second account\'s balance': (client) => {
    const landingPage = client.page.BankLanding();

    client.perform(function (done) {
      landingPage.getAccountBalance('232323').then((value) => {
        client.globals.acctBal = value;
      });
      done();
    });
  },

  'Step 2: Click on second account': (client) => {
    const landingPage = client.page.BankLanding();
    landingPage.clickAccountNumberByIndex(2);
  },
  'Step 3: Set deposit value then click on cancel': (client) => {
    const transactionsPage = client.page.Transactions();
    transactionsPage.clickTransactionButton('@depositButton');
    transactionsPage.setValue('@amountInput', 100);
    transactionsPage.click('@cancelButton');
  },
  'Step 4: Set deposit value': (client) => {
    const transactionsPage = client.page.Transactions();
    transactionsPage.clickTransactionButton('@depositButton');
    transactionsPage.setValue('@amountInput', 200);
    transactionsPage.click('@approveButton');
  },
  'Step 5: Click header link': (client) => {
    const landingPage = client.page.BankLanding();
    const headerPage = client.page.BankHeader();
    headerPage.scrollFromTop();
    headerPage.clickReduxBank();
    landingPage.expect.element('@title').text.to.be.equal(landingPage.props.title);
  },

  'Step 6: Verify the changed account\'s balance': (client) => {
    const landingPage = client.page.BankLanding();
    landingPage.getAccountBalance('232323').then((value) => {
      client.expect(value).to.be.equal('$' + (parseInt(client.globals.acctBal.substring(1)) + 200));
    });
  },
  'Step 7: Get the second account\'s balance': (client) => {
    const landingPage = client.page.BankLanding();

    client.perform(function (done) {
      landingPage.getAccountBalance('232323').then((value) => {
        client.globals.acctBal = value;
      });
      done();
    });
  },

  'Step 8: Click on second account again': (client) => {
    const landingPage = client.page.BankLanding();
    landingPage.clickAccountNumberByIndex(2);
  },

  'Step 9: Set withdrawl value then set the value click on cancel': (client) => {
    const transactionsPage = client.page.Transactions();
    transactionsPage.clickTransactionButton('@withdrawButton');
    transactionsPage.setValue('@amountInput', 150);
    transactionsPage.click('@cancelButton');
  },
  'Step 10: Set withdrawl value': (client) => {
    const transactionsPage = client.page.Transactions();
    transactionsPage.clickTransactionButton('@withdrawButton');
    transactionsPage.setValue('@amountInput', 150);
    transactionsPage.click('@approveButton');
  },
  'Step 11: Click header link': (client) => {
    const landingPage = client.page.BankLanding();
    const headerPage = client.page.BankHeader();
    headerPage.scrollFromTop();
    headerPage.clickReduxBank();
    landingPage.expect.element('@title').text.to.be.equal(landingPage.props.title);
  },

  'Step 12: Verify the changed account\'s balance': (client) => {
    const landingPage = client.page.BankLanding();
    client.perform(function (done) {
      landingPage.getAccountBalance('232323').then((value) => {
        client.expect(value).to.be.equal('$' + (parseInt(client.globals.acctBal.substring(1)) - 150));
      });
      done();
    }).end();
  }


};







