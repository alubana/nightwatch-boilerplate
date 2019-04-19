module.exports = {
  '@tags': ['UI009', 'bank'],
  disabled: false,

  before: function (client) {
        //Before Hook must contain all the logic to load the required page and setup pre-conditions
    client
            .logger('Testing redux-bank landing page UI')
            .loadBankPage('http://localhost:3000');
  },

  'TC1: Verify title and table headers': function (client) {

    client.expect.element('th').text.to.contain('Account Number');

    client.assert.elementsText('th', [
      'Account Number',
      'Account Type',
      'Balance'
    ]);
  }
};
