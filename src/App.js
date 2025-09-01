import './App.css';
import Navbar from "./NavBar";
import Hero from "./Hero2";
import Design from "./Design";
import Projects from "./Projects";
import Stickers from './Stickers';
import Crafts from "./Crafts";
import AboutPage from './AboutPage';
import Footer from "./Footer";
import React from "react";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Design />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Stickers />
      <br />
      <br />
      <Crafts />
      <br />
      <br />
      <AboutPage />
      <br />
      <Footer />
    </div>
  );
}

export default App;
