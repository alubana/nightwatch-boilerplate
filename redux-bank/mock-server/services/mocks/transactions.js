const Chance = require('chance');

const generateTransactions = () => {
    const chance = new Chance();
    let transactions = [];

        transactions.push(  {
                type: "Withdrawal",
                date: new Date("12/13/14"),
                amount: 250.00,
                accountId: 1
            },
            {
                type: "Deposit",
                date: new Date("1/3/15"),
                amount: 1000.00,
                accountId: 1
            },
            {
                type: "Deposit",
                date: new Date("1/5/14"),
                amount: 100.00,
                accountId: 2
            },
            {
                type: "Deposit",
                date: new Date("1/5/15"),
                amount: 345.00,
                accountId: 3
            },
            {
                type: "Deposit",
                date: new Date("1/7/16"),
                amount: 3453.00,
                accountId: 4
            },
            {
                type: "Deposit",
                date: new Date("1/5/17"),
                amount: 500.00,
                accountId: 5
            });

    return transactions;
};

// const export addTransaction = (type, date, amount, accountId) => {
//   transactions.push(  {
//     type: type,
//     date: new Date(date),
//     amount: amount,
//     accountId: accountId
//   });
// };

global['transactions'] = global['transactions'] || generateTransactions();
module.exports = global['transactions'];
