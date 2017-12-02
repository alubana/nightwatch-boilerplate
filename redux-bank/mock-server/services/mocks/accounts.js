const Chance = require('chance');

const generateAccounts = () => {
  const chance = new Chance();
  let accounts = [];

  // Add two Constant accounts for testing
    accounts.push({id: 1, accountNumber: '121212', accountType: 'Savings', balance: '$750'});
    accounts.push({id: 2, accountNumber: '232323', accountType: 'Money market', balance: '$100'});

  for (let i = 3; i<= 5; i++) {

    accounts.push(  {
        id: i,
        accountNumber: chance.cc(),
        accountType: chance.cc_type()
    });

  }

  console.log('Account Generated');

  return accounts;
};

global['accounts'] = global['accounts'] || generateAccounts();
module.exports = global['accounts'];
