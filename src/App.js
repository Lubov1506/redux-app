import './App.css';
import { Component, useReducer } from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  const {count, dispatch} = props
  const increment = () => {
    const action = {
      type: 'INCREMENT_COUNT'
    }
    dispatch(action)
  };
  const decrement = () => {
    const action = {
      type: 'DECREMENT_COUNT'
    }
    dispatch(action)
  };

  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return {
    count: state.count
  }
}
const WrappedApp = connect(mapStateToProps)(App);
export default WrappedApp;
