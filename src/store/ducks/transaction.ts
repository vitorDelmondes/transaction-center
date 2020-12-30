/* eslint-disable @typescript-eslint/camelcase */
interface transactionState {
  transactions: any
}

// Action Types
export const Types = {
  ADD_TRANSACTION: 'signin/ADD_TRANSACTION',
  CLEAR_STATE: 'signin/CLEAR_STATE',
};

// Reducer

const INITIAL_STATE: transactionState = {
  transactions: [],
};

export default function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.ADD_TRANSACTION:
      return state.transactions.push({ ...action.payload });
    case Types.CLEAR_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

// Action Creators

export function addTransaction(obj: object) {
  return {
    type: Types.ADD_TRANSACTION,
    payload: obj
  };
}