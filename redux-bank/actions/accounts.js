import * as types from '../constants/ActionTypes';
import axios from 'axios';
import * as serverConstant from '../mock-server/constants'

export function fetchAccounts() {
    return (dispatch) => {
        return axios.get(serverConstant.TARGET_HOST + serverConstant.BASE_PATH + 'account').then((res) => {
            dispatch({type: types.FETCH_ACCOUNTS, accounts: res.data});
        })
    };


}
