import React from 'react';
import './App.css';
import Header from './Header';
import './Header.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
        <Feed></Feed>
      </div>
    </div>
  );
}

export default App;
