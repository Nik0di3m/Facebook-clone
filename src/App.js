import React from 'react';
import './App.css';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (

    // BEM naming
    <div className="app">

      {/* Header */}
      <Header />
      {/* App body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      {/* Sidebar */}
      {/* Feed */}
      {/* Chat */}
    </div>
  );
}

export default App;
