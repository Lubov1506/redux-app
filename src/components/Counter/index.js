import { connect } from 'react-redux';
import { increment, decrement, changeStep } from '../../actions/actionCreators';

const Counter = props => {
  const { count, step } = props;

  const handlerInput = ({ target: { value } }) => {
    props.changeStep(Number(value));
  };

  return (
    <div className='App'>
      <h1>{count}</h1>
      <input type='number' value={step} onChange={handlerInput} />
      <div>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decrement}>-</button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ counter: { count, step } }) => ({ count, step });

const mapDispatchToProps = {
  increment,
  decrement,
  changeStep
};
const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default WrappedApp;
