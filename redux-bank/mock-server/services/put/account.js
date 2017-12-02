const _ = require('lodash');
const constants = require('../../constants');
const accounts = require('../mocks/accounts');

let putAccount = (req, res) => {

  const accountNumber = req.body.accountNumber;
  const accountType = req.body.accountType;
  const isAccountNumberExist = _.find(global['accounts'], {accountNumber: accountNumber});

  let responseBody = {};

  if (!(isAccountNumberExist) && accountType && accountNumber) {
    responseBody = {
      id: accounts.length + 1,
      accountNumber: accountNumber,
      accountType: accountType
    };
    global['accounts'].push(responseBody);
  } else if ((isAccountNumberExist)) {
    res.status(409);
    responseBody = {'status': 409, 'message': 'Duplicate account number not allowed'};
  } else if (!(accountType) || !(accountNumber)) {
    res.status(400);
    responseBody = {'status': 400, 'message': 'Missing Account Number and/or Account Type'};

  } else {
    responseBody = {'status': 500, 'message': 'unknown error has occurred or server'};
    res.status(500)
  }

  setTimeout(() => {
    res.send(responseBody);
  }, constants.DELAY_SUBMITTING);
};

module.exports = {
  path: constants.BASE_PATH + 'account',
  callback: putAccount
};
