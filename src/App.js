import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { BooksList } from './Context/Context';
import Login from './pages/login/Login';
import BookRegistrationPage from './pages/bookRegistrationPage/BookRegistrationPage';
import StartingSearchPage from './pages/startingSearchPage/StartingSearchPage'
import Footer from './Component/Footer/Footer'
import { Home } from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <BooksList>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/bookRegistrationPage' element={<BookRegistrationPage />}></Route>
        </Routes>
        <Home />
        <Footer />
      </BooksList>
    </BrowserRouter>
  );
}

export default App;
