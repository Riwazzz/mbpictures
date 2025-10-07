import React, { useEffect, useRef } from "react";
import Hero from "./Hero";
import About from "./About";

const HeroAboutTransition = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero = heroRef.current;
    const about = aboutRef.current;
    
    if (!container || !hero || !about) return;

    // Set initial styles
    hero.style.position = "sticky";
    hero.style.top = "0";
    hero.style.zIndex = "1";
    
    about.style.position = "relative";
    about.style.zIndex = "2";
    about.style.background = "black";

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const heroHeight = hero.offsetHeight;
      const scrollProgress = -containerRect.top / heroHeight;
      
      // Only apply effects during the transition (when hero is still visible)
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        // No opacity change for hero section as requested
        
        // Slide up effect for about section
        about.style.transform = `translateY(${Math.max(0, (1 - scrollProgress) * 50)}vh)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef} className="transition-transform duration-300">
        <About />
      </div>
    </div>
  );
};

export default HeroAboutTransition;