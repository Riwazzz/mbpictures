import React from "react";

const Events = () => {
  return (
    <section
      id="events"
      className="py-20 px-4 bg-gradient-to-r from-black via-zinc-900 to-black text-gold"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Events & Distribution
      </h2>
      <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
        <p className="mb-6 text-lg">
          Join us at upcoming screenings, festivals, and events. Get your
          tickets and stay updated!
        </p>
        <button className="bg-gold text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-all duration-200 scale-100 hover:scale-105">
          Get Tickets
        </button>
      </div>
    </section>
  );
};

export default Events;
