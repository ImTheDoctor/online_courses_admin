import './App.css';
import Login from './pages/auth/Login';
import Main from './components/Main';
import { useAuthContext } from './hooks/useAuthContext'

const App = () => {
  
  const { user } = useAuthContext()
  return (
    <>
      {
        !user ?
          <Login /> :
          <Main />
      }
    </>
  );
};
export default App;