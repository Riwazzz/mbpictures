import React from "react";
import { services } from "../constants/data";

const Services = () => {

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-r from-black via-zinc-900 to-black text-gold"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service}
            className="bg-black/80 border-2 border-gold rounded-xl p-10 shadow-xl text-center hover:scale-105 transition-transform duration-200"
          >
            <h3 className="text-2xl font-semibold mb-3">{service}</h3>
            <p className="text-gold/80">
              Professional {service.toLowerCase()} services for your next
              project.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
