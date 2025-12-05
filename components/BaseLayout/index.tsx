"use client";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import GetInTouch from "../GetInTouch";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">{children}</main>
      {/* <Footer /> */}
      <GetInTouch />
    </div>
  );
};

export default BaseLayout;
