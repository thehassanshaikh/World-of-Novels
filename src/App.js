import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./pages/login/Login";
import BookRegistrationPage from "./pages/bookRegistrationPage/BookRegistrationPage";
import StartingSearchPage from "./pages/startingSearchPage/StartingSearchPage";

import { AuthContextProvider } from "./Context/AuthContext";
import Layout from "./Components/Layout/Layout";
import SingleBook from "./pages/SingleBook/SingleBook"
import Cart from "./pages/Cart/Cart"



function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/main" element={<Layout />}></Route>
          <Route
            path="/bookRegistrationPage"
            element={<BookRegistrationPage />}
          ></Route>
          <Route path="/singleBook/:title" element={<SingleBook />}></Route>
          <Route path="/cart" element={<Cart />}></Route>

        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
