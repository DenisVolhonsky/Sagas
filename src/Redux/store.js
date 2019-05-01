import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 1:05 Repeta
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas'

import counterReducer from './counterReducer'
import stepReducer from './stepReducer'


const sagaMiddleware = createSagaMiddleware()
// const enhancer = composeWithDevTools() // redux DevTools

// делает store в виде объекта
const rootReducer = combineReducers({
  counterValue: counterReducer,
  step: stepReducer
})


// если 2м параметром функция он понимает что это [enhancer], если обект он понимает что это [preloadedState]
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));  // reducer, [preloadedState] - например нач сост из locarStorage, [enhancer] - прослойки

sagaMiddleware.run(rootSaga)

export default store;