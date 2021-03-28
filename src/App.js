import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();
  return (

    // BEM naming
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
