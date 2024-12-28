import React from "react";
import Nav from "./assets/componets/navbar/nav";
import Header from "./assets/componets/header/header";
import Portfolio from "./assets/componets/Portfolio/portfolio";
import About from "./assets/componets/about/about";
import Contact from "./assets/componets/Contact Me/Contact";
import Footer from "./assets/componets/footer/footer";

function App() {
  return (
    <>
      <Nav />
      <Header/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
