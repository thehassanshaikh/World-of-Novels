import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ContextApi } from './Components/Context/ContextApi';
import Login from './pages/login/Login';
import BookRegistrationPage from './pages/bookRegistrationPage/BookRegistrationPage';
import StartingSearchPage from './pages/startingSearchPage/StartingSearchPage'
import Footer from './Component/Footer/Footer'
import { Home } from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/bookRegistrationPage' element={<BookRegistrationPage />}></Route>
      </Routes>
      <ContextApi />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
