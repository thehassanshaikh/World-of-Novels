import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import BookRegistrationPage from './pages/bookRegistrationPage/BookRegistrationPage';

function App() {
  return (
    <div className="app">
      <Login />
      <BookRegistrationPage />
    </div>
  );
}

export default App;
