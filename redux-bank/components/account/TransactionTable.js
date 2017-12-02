import React,{Component } from 'react';
import Transaction from './Transaction';

export default class TransactionTable extends Component {

   transactions;

  constructor(props) {
    super(props);
    this.transactions = [];
    this.props.actions.fetchTransactions();
  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.transactions.length) {
      this.transactions = nextProps.transactions.filter((transaction) => {
        return transaction.accountId === Number(this.props.id);
      });
    }
  }

  render () {
    return (
      <table className="ui celled table">
        <thead>
        <tr>
          <th>Type</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {this.transactions.map((transaction, i) => {
          return <Transaction key={i} transaction={transaction}/>;
        })}
        </tbody>
      </table>
    );
  }
};
