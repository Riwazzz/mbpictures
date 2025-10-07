import React from "react";
import { useContent } from "../context/ContentContext.jsx";

const Hero = () => {

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { data } = useContent();
  const videoUrl = data?.hero?.videoUrl;

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-[90vh] overflow-hidden"
    >
      {/* Cinematic video background */}
      <video
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
        <span className="text-4xl md:text-6xl font-extrabold text-gold drop-shadow-lg tracking-tight animate-fade-in text-center">
          Canada’s Complete Film & Media Production House
        </span>
        <h1 className="text-lg md:text-2xl font-bold text-gold mt-6 mb-4 animate-fade-in-slow text-center">
          Nationwide Movie Production • Line Production • Post Production • Distribution
        </h1>
        <div className="flex gap-4 mt-8">
          <button
            data-cursor="view"
            className="bg-gold text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-all duration-200 scale-100 hover:scale-105"
            onClick={() => handleButtonClick("portfolio")}
          >
            View Our Work
          </button>
          <button
            data-cursor="view"
            className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-black transition-all duration-200 scale-100 hover:scale-105"
            onClick={() => handleButtonClick("contact")}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
