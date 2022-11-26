import './App.css';
import { useState } from 'react';
import Login from './pages/auth/Login';
import Main from './components/Main';

const App = () => {

  const [isAdmin, setIsAdmin] = useState(false)
  return (
    <>
      {
        !isAdmin ?
          <Login setIsAdmin={setIsAdmin} /> :
          <Main setIsAdmin={setIsAdmin} />
      }
    </>
  );
};
export default App;