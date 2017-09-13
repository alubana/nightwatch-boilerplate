module.exports = {
    '@tags': ['UI003', 'deposit'],
    disabled: false,

    before: function (client) {
        //Before Hook must contain all the logic to load the required page and setup pre-conditions
        client
            .logger('Deposit money happy path test')
            .loadBankPage();
    },

    "Step 1: Get the first account's balance": function (client) {
        const landingPage = client.page.BankLanding();
        const transactionsPage = client.page.Transactions();
        console.log(`get account balance: ${landingPage.getAccountBalance('121212')}`);
        // landingPage.clickAccountNumberByIndex();

        // transactionsPage.expect.element('@title').text.to.be.equal(transactionsPage.props.title);

    }

    // "Step 2: Click on first account": function (client) {
    //     const landingPage = client.page.BankLanding();
    //     const transactionsPage = client.page.Transactions();
    //
    //     landingPage.clickAccountNumberByIndex();
    //
    //     transactionsPage.expect.element('@title').text.to.be.equal(transactionsPage.props.title);
    //
    // },
    // "Step 3: Click header link": function (client) {
    //     const landingPage = client.page.BankLanding();
    //     const headerPage = client.page.BankHeader();
    //
    //     headerPage.scrollFromTop();
    //
    //     headerPage.clickReduxBank();
    //     landingPage.expect.element('@title').text.to.be.equal(landingPage.props.title);
    // }
};