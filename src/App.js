import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ContextApi } from './Components/Context/ContextApi';
import Login from './pages/login/Login';
import BookRegistrationPage from './pages/bookRegistrationPage/BookRegistrationPage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/bookRegistrationPage' element={<BookRegistrationPage />}></Route>
        </Routes>
        <ContextApi />
      </BrowserRouter>
    </div>
  );
}

export default App;
