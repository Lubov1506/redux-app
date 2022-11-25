import './App.css';
import { Component, useReducer } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, changeStep } from './actions/actionCreators';

const App = props => {
  const { count, step } = props;

  const inc = () => {props.increment()};
  const dec = () => {props.decrement()};
  const handlerInput = ({target: {value}}) =>{
    props.changeStep(Number(value))
  }

  return (
    <div className='App'>
      <h1>{count}</h1>
      <input type='number' value={step} onChange={handlerInput}/>
      <div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>        
      </div>

    </div>
  );
};
const mapStateToProps = state => {
  return {
    count: state.count,
    step: state.step
  };
};
const mapDispatchToProps = {
  increment,
  decrement,
  changeStep
};
const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default WrappedApp;
