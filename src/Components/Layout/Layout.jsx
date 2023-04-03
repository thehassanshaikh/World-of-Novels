import React from "react";
import Footer from "../Footer/Footer";
import { Home } from "../../pages/Home/Home";
import NavBar from "../NavBar/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <div className="max-h-screen overflow-y-auto hide-scrollbar">
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
