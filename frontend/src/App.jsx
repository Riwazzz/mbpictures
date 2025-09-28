import React from "react";
import {
  Header,
  Hero,
  About,
  LineProduction,
  Services,
  Portfolio,
  News,
  Events,
  Contact,
  Footer
} from "./components";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen text-gold font-sans">
      <Header />
      <Hero />
      <About />
      <LineProduction />
      <Services />
      <Portfolio />
      <News />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
