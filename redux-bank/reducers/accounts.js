import {FETCH_ACCOUNTS} from '../constants/ActionTypes';

const initialState = [
];

export default function accounts(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACCOUNTS:
            return action.accounts.slice(0);
        default:
            return state;
    }
}
