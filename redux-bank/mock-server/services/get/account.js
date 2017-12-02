const constants = require('../../constants');
const accounts = require('../mocks/accounts');

function getAccounts(req, res) {
  setTimeout(() => {
    res.status(200).send(accounts)
  }, constants.DELAY);
}

module.exports = {
  path: constants.BASE_PATH + 'account',
  callback: getAccounts
};
