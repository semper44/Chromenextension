/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import * as S from "./styles/Style";
import NavBar from "./NavBar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <S.LayoutHolder className="container w-full flex justify-center">
      <div className="w-11/12 lg:w-6/12 flex justify-center flex-col items-center">
        <NavBar />
        {children}
        <Footer />
      </div>
    </S.LayoutHolder>
  );
}

export default MainLayout;
