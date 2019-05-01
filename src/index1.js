import { createStore } from "redux";
console.dir(createStore);

const initialState = 100;

// для того чтобы не делачть опечатку храним названия типов экшенов в 1 месте
const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  RESET: "RESET"
};

const reducer = (state=initialState, action) => {
  console.log("inside reducer", action);
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + action.payload;
    case ACTION_TYPES.DECREMENT:
      return state - action.payload;
    case ACTION_TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};

const store = createStore(reducer);  // reducer, [preloadedState] - например нач сост из locarStorage, [enhancer] - прослойки middleware

console.log("store:", store.getState());

// создаем action или action creater(функция с параметром которая меняет payload)
// action - это объект
// action creator - это функция, которая возвращает объект

const incrementAction = value => ({
  type: ACTION_TYPES.INCREMENT,
  payload: value,
});

const decrementAction = value => ({
  type: ACTION_TYPES.DECREMENT,
  payload: value,
});

const resetAction = {
  type: ACTION_TYPES.RESET,
};


//отправляем action либо action creator
store.dispatch(incrementAction(5));
console.log("store +5:", store.getState());

store.dispatch(decrementAction(5));
console.log("store -5:", store.getState());

store.dispatch(decrementAction(5));
console.log("store -5:", store.getState());

store.dispatch(resetAction);
console.log("reset:", store.getState());