import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

const App = props => {
  return (
    <>
      <UserForm />
      <UsersList/>
    </>
  );
};
export default App;
