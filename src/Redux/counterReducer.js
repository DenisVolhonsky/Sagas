import types from "./actionTypes";

const initialState = 100;

// combine reducers 20:59

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ASYNC_INCREMENT':
      return state + action.payload;
    case 'SYNC_INCREMENT': 
      return state + action.payload;
    case types.DECREMENT:
      return state - action.payload;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
