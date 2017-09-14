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
        landingPage.getAccountBalance('121212').then((value)=>{
            console.log(`the value: ${value}`)
        });
    },

    "Step 2: Click on first account": function (client) {
        const landingPage = client.page.BankLanding();
        landingPage.clickAccountNumberByIndex();
    },

    "Step 3: Set deposit value": function (client) {
        const transactionsPage = client.page.Transactions();

        transactionsPage.clickDepositButton();
        transactionsPage.setValue('@amountInput', ["100", client.Keys.ENTER]);
        // client.perform(function(done){
        //     console.log(`Old currentAcctBal is: ${this.globals.currentAccountBal}`);
        //     done();
        // })
    }
};







