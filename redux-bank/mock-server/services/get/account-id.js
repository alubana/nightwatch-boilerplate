const _ = require('lodash');
const constants = require('../../constants');
const accounts = require('../mocks/accounts');

function getAccount(req, res) {
  const id = req.params.id;
  const account = _.find(accounts, 'id', id);

  if (account) {
    setTimeout(() => {
      res.send(account);
    }, constants.DELAY);
  } else {
    res.status(404).send({status: 404, 'message': 'No account found with id = ' + id});
  }
}

module.exports = {
  path: constants.BASE_PATH + 'account/:id',
  callback: getAccount
};
