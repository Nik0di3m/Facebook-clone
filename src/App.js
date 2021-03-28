import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (

    // BEM naming
    <div className="app">

      {/* Header */}
      <Header />
      <Sidebar />
      {/* App body */}
      {/* Sidebar */}
      {/* Feed */}
      {/* Chat */}
    </div>
  );
}

export default App;
