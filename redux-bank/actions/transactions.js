import * as types from '../constants/ActionTypes';
import axios from 'axios';
import * as serverConstant from "../mock-server/constants";

export function fetchTransactions() {
    return (dispatch) => {
        return axios.get(serverConstant.TARGET_HOST + serverConstant.BASE_PATH + 'transaction').then((res) => {
            dispatch({type: types.FETCH_TRANSACTIONS, transactions: res.data});
        })
    };
}

export function addTransaction(type, accountId, amount) {

  return (dispatch) => {
    return axios.post(serverConstant.TARGET_HOST + serverConstant.BASE_PATH + 'transaction', {
        transactionType: type,
        amount: amount,
        accountId: accountId
    }).then((res) => {
      dispatch({ type: types.ADD_TRANSACTION, transaction: res.data })
    })
  };

    // return { type: types.ADD_TRANSACTION, transactionType, amount, accountId };
}