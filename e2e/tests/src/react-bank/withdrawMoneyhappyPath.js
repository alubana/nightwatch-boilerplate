module.exports = {
  '@tags': ['UI004', 'withdraw'],
  disabled: false,

  before: (client) => {
    client
            .logger('Withdraw money happy path test')
            .loadBankPage();
  },
    //
  'Step 1: Get the first account\'s balance': (client) => {
    const landingPage = client.page.BankLanding();

    client.perform(function (done) {
      landingPage.getAccountBalance('121212').then((value) => {
        client.globals.acctBal = value;
      });
      done();
    });
  },
  'Step 2: Click on first account': (client) => {
    const landingPage = client.page.BankLanding();
    landingPage.clickAccountNumberByIndex(1);
  },
  'Step 3: Set withdraw value': (client) => {
    const transactionsPage = client.page.Transactions();
    transactionsPage.clickTransactionButton('@withdrawButton');
    transactionsPage.setValue('@amountInput', 200);
    transactionsPage.click('@approveButton');
  },
  'Step 4: Click header link': (client) => {
    const landingPage = client.page.BankLanding();
    const headerPage = client.page.BankHeader();
    headerPage.scrollFromTop();
    headerPage.clickReduxBank();
    landingPage.expect.element('@title').text.to.be.equal(landingPage.props.title);
  },
  'Step 5: Verify the changed account\'s balance': (client) => {
    const landingPage = client.page.BankLanding();
    client.perform(function (done) {
      landingPage.getAccountBalance('121212').then((value) => {
        client.expect(value).to.be.equal('$' + (parseInt(client.globals.acctBal.substring(1)) - 200));
      });
      done();
    }).end();
  }
};




