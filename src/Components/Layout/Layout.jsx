import React from "react";
import Footer from "../Footer/Footer";
import { Home } from "../../pages/Home/Home";
import { NovelsList } from "../NovelsList/NovelsList";
import NavBar from "../NavBar/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />
      <NovelsList />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
