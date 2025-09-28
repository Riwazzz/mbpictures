import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-black/90 text-gold">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
      <div className="max-w-2xl mx-auto animate-fade-in-up">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-6 py-3 rounded bg-black border-2 border-gold text-gold focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-6 py-3 rounded bg-black border-2 border-gold text-gold focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Your Message"
            className="px-6 py-3 rounded bg-black border-2 border-gold text-gold focus:outline-none focus:ring-2 focus:ring-gold"
            rows={4}
          />
          <button
            type="submit"
            className="bg-gold text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-all duration-200 scale-100 hover:scale-105"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 text-center">
          <p className="font-semibold">
            Office: 125 Barker St, London, Canada
          </p>
          <div className="mt-2">
            <iframe
              title="Office Location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1257%2C51.5085%2C-0.1246%2C51.5095&amp;layer=mapnik"
              className="w-full h-40 border-2 border-gold rounded"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
