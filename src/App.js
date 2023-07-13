import React from 'react';
import Sidebar from './components/Sidebar';
import './components/styles.css';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
