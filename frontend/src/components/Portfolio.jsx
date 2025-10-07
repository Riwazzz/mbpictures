import React from "react";
import { useContent } from "../context/ContentContext.jsx";

const Portfolio = () => {
  const { data } = useContent();
  const items = data?.portfolio?.items || [];

  return (
  <section id="portfolio" className="py-24 px-0 bg-black/95 text-gold">
      <h2 className="text-4xl font-bold text-center mb-10">
        Portfolio / Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {items.map((item) => (
          <div
            key={item.img}
            className="portfolio-card group hover:scale-105 transition-transform duration-200 w-full"
          >
            <img
              src={item.img}
              alt={item.title}
              className="object-cover transition duration-300 w-full h-80"
            />
            <div className="p-3 text-gold">
              <h4 className="text-2xl font-semibold mb-1">{item.title}</h4>
              <p className="text-gold/80">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
