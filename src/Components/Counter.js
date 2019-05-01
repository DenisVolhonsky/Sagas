import React from "react";
import { connect } from "react-redux";
import * as counterActions from '../Redux/counterActions'
// или
// import { decrement, reset, increment} from "../Redux/counterActions";


const Counter = ({ asyncIncrement, incrementSync, decrement, reset, step, value }) => (
  <div>
    <h1>{value}</h1>
    <br/>
    <button onClick={asyncIncrement}>Async Increment</button>
    <button onClick={() => incrementSync(step)}>Increment</button>
    <button onClick={() => decrement(step)}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

// замапай state reduxа в пропы компонента
// эта функция получает объект state
const mapStateToProps = state => ({
  value: state.counterValue,
  step: state.step
});

// отправь которые диспатчит экшн закинет в пропы компонента
const mapDispatchToProps = (dispatch) => ({
 asyncIncrement : () => dispatch({ type: "INCREMENT" }),
 incrementSync : (value) => dispatch(counterActions.incrementSync(value)),
 decrement : (value) => dispatch(counterActions.decrement(value)),
 reset : () => dispatch(counterActions.reset)
})
//или так 
// const mapDispatchToProps = { decrement, reset, increment }; //  отправка экшкнов в редьюсер

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(Counter);

// HOC
// function connect(props) {
//   return function (WrappedComponent) {
//     return class ...
//   }
// }
