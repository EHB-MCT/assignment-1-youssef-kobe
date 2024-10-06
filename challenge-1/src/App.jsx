import React from 'react';
import HomePage from './pages/HomePage';
import './styles/App.css';

// Acts as the root component of the application
const App = () => {
  return (
    <div className="app-container">
      <HomePage />
    </div>
  );
};

export default App;