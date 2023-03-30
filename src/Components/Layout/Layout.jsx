import React from "react";
import Footer from "../Footer/Footer";
import { Home } from "../../pages/Home/Home";
// import { NovelsList } from "../NovelsList/NovelsList";
import { BooksList } from "../../Context/Context";
import NavBar from "../NavBar/NavBar";

function Layout() {
  return (
    <div>
      <BooksList />
      <NavBar />
      {/* <NovelsList /> */}
      <Home />
      <Footer />
      <BooksList />
    </div>
  );
}

export default Layout;
