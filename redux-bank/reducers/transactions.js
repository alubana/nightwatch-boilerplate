import {ADD_TRANSACTION, FETCH_TRANSACTIONS} from '../constants/ActionTypes';

const initialState = [];

export default function transactions(state = initialState, action) {
    switch (action.type) {
        case ADD_TRANSACTION:
            return [...state, action.transaction];

        case FETCH_TRANSACTIONS:
            return action.transactions.slice(0);
        default:
            return state;
    }
}
