
import React from "react";
import Footer from "../Footer/Footer";
import { Home } from "../../pages/Home/Home";
import NavBar from "../NavBar/NavBar";

function Layout() {
  return (
    <div className='max-h-screen overflow-hidden'>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
