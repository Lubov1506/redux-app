import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import UserForm from './components/UserForm';

const App = props => {
  return (
    <>
      <UserForm />
      <TaskForm />
      <TaskList />
    </>
  );
};
export default App;
