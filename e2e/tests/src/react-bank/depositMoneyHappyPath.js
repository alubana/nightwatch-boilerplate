module.exports = {
    '@tags': ['UI003', 'deposit'],
    disabled: false,

    before: (client) => {
        client
            .logger('Deposit money happy path test')
            .loadBankPage();
    },

    "Step 1: Get the first account's balance": (client) => {
        const landingPage = client.page.BankLanding();

        client.perform(function (done) {
            landingPage.getAccountBalance('121212').then((value) => {
                client.globals.acctBal = value;
            });
            done();
        })
    },

    "Step 2: Click on first account": (client) => {
        const landingPage = client.page.BankLanding();
        landingPage.clickAccountNumberByIndex();
    },

    "Step 3: Set deposit value": (client) => {
        const transactionsPage = client.page.Transactions();
        transactionsPage.clickDepositButton();
        transactionsPage.setValue('@amountInput', 100);
        transactionsPage.click('@approveButton');
    },

    "Step 4: Click header link": (client) => {
        const landingPage = client.page.BankLanding();
        const headerPage = client.page.BankHeader();
        headerPage.scrollFromTop();
        headerPage.clickReduxBank();
        landingPage.expect.element('@title').text.to.be.equal(landingPage.props.title);
    },

    "Step 5: Verify the changed account's balance": (client) => {
        const landingPage = client.page.BankLanding();
        client.perform(function (done) {
            landingPage.getAccountBalance('121212').then((value) => {
                client.expect(value).to.be.equal("$" + (parseInt(client.globals.acctBal.substring(1)) + 100));
            });
            done();
        }).end();
    }
};







