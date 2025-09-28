import React from "react";
import { portfolioItems } from "../constants/data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-black/95 text-gold">
      <h2 className="text-4xl font-bold text-center mb-10">
        Portfolio / Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {portfolioItems.map((item) => (
          <div
            key={item.img}
            className="portfolio-card group bg-black/80 border-2 border-gold rounded-xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <div className="relative h-64 w-full">
              <img
                src={item.img}
                alt={item.title}
                className="object-cover transition duration-300 w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-gold portfolio-card-desc flex flex-col justify-end h-full">
                <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                <p className="text-gold/80">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
