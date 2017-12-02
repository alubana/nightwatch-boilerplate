const _ = require('lodash');
const constants = require('../../constants');
const transactions = require('../mocks/transactions');

function getTransactions(req, res) {
    setTimeout(() => {
        res.status(200).send(transactions)
    }, constants.DELAY);
}

module.exports = {
    path: constants.BASE_PATH + 'transaction',
    callback: getTransactions
};
