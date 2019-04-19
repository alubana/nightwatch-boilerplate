/**
 * Created by vsellath on 9/21/2017.
 */
/**
 * Created by vsellath on 9/20/2017.
 */

module.exports = {

    //This test is to withdraw money, check the table  then check the

  '@tags': ['UI006', 'withdraw1'],
  disabled: false,

  before: (client) => {
    client
            .logger('Testing redux-bank withdraw money')
            .loadBankPage();
  },
  'step1': function (client){
    client
            .click('tr:nth-child(1) td:nth-child(1) a')
            .assert.containsText('h1', 'Transactions')
            .expect.element('table tr:nth-child(1) th:nth-child(1)').text.to.be.equal('Type');
    client
            //here we have to intraduce client again because expect is not going to return client but
            // all other function are return example click, setValue, ...
            //.expect.element('h1').text.to.be.equal('Transactions')
            .click('button.green')
            .setValue('input', '200')
            .click('div.positive')
            .click('button.red')
            .setValue('input', '150')
            .click('div.positive');
  },
  'step2': function (client){
    client
            .click('a.brand.item')
            .click('tr:nth-child(1) td:nth-child(1) a')
            .assert.containsText('h1', 'Transactions')
            .click('button.red')
            .setValue('input', '300')
            .click('div.positive');

  }

};







