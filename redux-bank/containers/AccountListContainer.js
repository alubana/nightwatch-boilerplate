import React, { Component} from 'react';
import { connect } from 'react-redux';
import AccountList from '../components/dashboard/AccountList';
import {bindActionCreators} from "redux";
import * as AccountActions from '../actions/accounts';
import * as TransactionActions from '../actions/transactions';

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    transactions: state.transactions
  };
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...AccountActions, ...TransactionActions}, dispatch)
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountList);



