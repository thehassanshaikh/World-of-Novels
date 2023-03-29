import React from "react";
import Footer from '../Footer/Footer'
import {Home} from '../../pages/Home/Home'
import { NovelsList } from '../NovelsList/NovelsList'

function Layout() {
  return (
    <div>
      <NovelsList />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
