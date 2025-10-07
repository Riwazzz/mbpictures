import React from "react";
import {
  Header,
  LineProduction,
  Services,
  Portfolio,
  News,
  Events,
  Contact,
  Footer,
  Intro,
  ScrollToTop
} from "./components";
import Cursor from "./components/Cursor";
import HeroAboutTransition from "./components/HeroAboutTransition";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen text-gold font-sans">
      <Cursor />
      <Intro />
      <Header />
      <HeroAboutTransition />
      <LineProduction />
      <Services />
      <Portfolio />
      <News />
      <Events />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
