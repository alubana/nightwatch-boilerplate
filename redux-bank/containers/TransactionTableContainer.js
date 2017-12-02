import React, {Component} from 'react';
import {connect} from 'react-redux';
import TransactionTable from '../components/account/TransactionTable';
import {bindActionCreators} from "redux";

import * as TransactionActions from '../actions/transactions';


const mapStateToProps = (state) => {
    return {
        transactions: state.transactions
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({...TransactionActions}, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TransactionTable);
