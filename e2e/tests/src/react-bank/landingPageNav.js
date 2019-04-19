module.exports = {
  '@tags': ['UI002', 'bank'],
  disabled: false,

  before: function (client) {
        //Before Hook must contain all the logic to load the required page and setup pre-conditions
    client
            .logger('Testing react-bank landing page UI')
            .loadBankPage();
  },

  'TC1: Click on first account': function (client) {
    const landingPage = client.page.BankLanding();
    const transactionsPage = client.page.Transactions();

    landingPage.clickAccountNumberByIndex();

    transactionsPage.expect.element('@title').text.to.be.equal(transactionsPage.props.title);

  },
  'TC2: Click header link': function (client) {
    const landingPage = client.page.BankLanding();
    const headerPage = client.page.BankHeader();

    headerPage.scrollFromTop();

    headerPage.clickReduxBank();
    landingPage.expect.element('@title').text.to.be.equal(landingPage.props.title);
  }
};
