import './App.css';
import { useReducer } from 'react';

function reducer (state, action){
  switch(action.type){
    case 'PLUS_ONE':{
      return {}
    }
    case 'SUB_ONE':{
      return {}
    }
  }
  return state
}

function App () {
  const [state, dispatch] = useReducer(reducer, {
    counr: 0
  });

  const increment = () => {
    dispatch({
      type: 'PLUS_ONE',
      count: state.count+1
    })
  };
  const decrement = () => {
    dispatch({
      type: 'SUB_ONE',
      count: state.count-1
    })
  };
  return (
    <div className='App'>
      <h1>{state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
