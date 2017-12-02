const constants = require('../../constants');
const _ = require('lodash');
const transactions = require('../mocks/transactions');


const sendTransaction = (req, res) => {


  const transaction = {
    type: req.body.transactionType,
    date: new Date(),
    amount: req.body.amount,
    accountId: req.body.accountId
  };

  global['transactions'].push(transaction);

  setTimeout(() => {
    res.send(transaction);
  }, constants.DELAY_SUBMITTING);
};

module.exports = {
  path: constants.BASE_PATH + 'transaction',
  callback: sendTransaction
};
