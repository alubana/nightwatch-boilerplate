const _ = require('lodash');
const constants = require('../../constants');

let deleteAccount = (req, res) => {

  const accountNumber = req.body.accountNumber;
  const existingAccount = _.find(global['accounts'], {accountNumber: accountNumber});

  let responseBody = {};

  if (existingAccount) {
    _.remove(global['accounts'], existingAccount);
    responseBody = existingAccount;
    res.status(200);
  } else {
    responseBody = {'status': 400, 'message': 'Account not found'};
    res.status(400)
  }

  setTimeout(() => {
    res.send(responseBody);
  }, constants.DELAY_SUBMITTING);
};

module.exports = {
  path: constants.BASE_PATH + 'account',
  callback: deleteAccount
};
