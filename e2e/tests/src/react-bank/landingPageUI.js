module.exports = {
    '@tags': ['UI001'],
    disabled: false,

    before: function (client) {
        //Before Hook must contain all the logic to load the required page and setup pre-conditions
        client
            .logger("Testing react-bank landing page UI")
            .loadBankPage();
    },

    'TC1: Verify title and table headers': function (client) {
        /*
        create a pom object, name should be follow camel case, followed by suffix "Page".
        Name of Page Model is from file name. Therefore, must be unique.
        And start With Upper case (No suffix Page required as it is inside dir page modals).
         */
        const landingPage = client.page.BankLanding();

       landingPage.verifyTableHeaders();

       //Data Driven approach using Arrays.
       let accountData = [];

       accountData.push({accountNumber: '121212', accountType: 'Savings', balance: '$750'});
       accountData.push({accountNumber: '232323', accountType: 'Money market', balance: '$100'});

       //rowIndex + 1 as the array index starts from zero and dom element index starts from 1
       accountData.forEach(function (result, rowIndex) {
           //Parametrized assertion functions
           landingPage.verifyAccountInfo(rowIndex + 1, result.accountNumber, result.accountType, result.balance)
       });
    },
    'TC2: Click on account number': function (client) {
        const landingPage = client.page.BankLanding();

        //Method internally asserts a timeout
        landingPage.clickAccountNumberByIndex();
    }
};