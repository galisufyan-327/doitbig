import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Process from "../components/Process";
import Work from "../components/Work";

const Main = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var header = document.getElementById("navbar-header");
      header.classList.toggle("scrolled", window.scrollY > 0);
    });
  }, []);

  return (
    <div id="main">
      <Home />
      <Achievements />
      <Services />
      <Work />
      <Process />
      <Contact />
    </div>
  );
};

export default Main;
