import React, { useEffect, useRef, useState } from "react";

const heroVideo = "https://www.w3schools.com/html/mov_bbb.mp4"; // Example free video
const portfolioItems = [
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    title: "Milky Way Night",
    desc: "A breathtaking view of the Milky Way galaxy captured in a remote location."
  },
  {
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Yosemite Sunrise",
    desc: "Sunrise over Yosemite National Park, highlighting the beauty of nature."
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Coastal Escape",
    desc: "A peaceful retreat by the ocean, perfect for creative inspiration."
  }
];

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [headerBg, setHeaderBg] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Show/hide header on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowHeader(false); // scroll down
      } else {
        setShowHeader(true); // scroll up
      }
      lastScrollY.current = currentScrollY;
      // Toggle header background if not in hero section
      setHeaderBg(currentScrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black min-h-screen text-gold font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-30 flex items-center justify-between px-8 py-4 h-20 transition-all duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${headerBg ? "bg-white backdrop-blur-md shadow-lg" : "bg-transparent"}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className={`text-2xl font-extrabold tracking-tight ${
              headerBg ? "text-black/80" : "text-white"
            }`}
          >
            MB Pictures
          </span>
        </div>
        {/* Navlinks (center) */}
        <nav className="hidden md:flex gap-8 mx-auto">
          {["Home", "Services", "Portfolio", "Events"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`font-medium hover:text-yellow-400 transition text-lg ${
                headerBg ? "text-black/80" : "text-white"
              }`}
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById(link.toLowerCase());
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  const section = document.getElementById(link.toLowerCase());
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              {link}
            </a>
          ))}
        </nav>
        {/* Hamburger menu (right) - always visible */}
        <div className="flex items-center relative">
          {/* Rotating hamburger menu button */}
          <button
            aria-label="Open menu"
            className={`focus:outline-none group ${
              headerBg ? "text-black/80" : "text-white"
            }`}
            onClick={() => {
              const menu = document.getElementById("hamburger-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
          >
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 transition-transform duration-300 group-hover:rotate-90"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Hamburger dropdown menu */}
          <div
            id="hamburger-menu"
            className="hidden absolute right-0 top-14 bg-black/95 border border-gold rounded-lg shadow-lg py-4 px-8 flex flex-col gap-4 z-50 min-w-[160px]"
          >
            <a
              href="#about"
              className="text-gold font-medium hover:text-yellow-400 transition text-lg"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("about");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
                const menu = document.getElementById("hamburger-menu");
                if (menu) menu.classList.add("hidden");
              }}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gold font-medium hover:text-yellow-400 transition text-lg"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
                const menu = document.getElementById("hamburger-menu");
                if (menu) menu.classList.add("hidden");
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center h-[90vh] overflow-hidden"
      >
        {/* Cinematic video background */}
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full w-full">
          <span className="text-7xl md:text-8xl font-extrabold text-gold drop-shadow-lg tracking-tight animate-fade-in">
            MB Pictures Canada Inc
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-gold mt-6 mb-4 animate-fade-in-slow text-center">
            Feature films • Shorts • Music videos • Daily programs — end-to-end.
          </h1>
          <div className="flex gap-4 mt-8">
            <button
              className="bg-gold text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-400 transition-all duration-200 scale-100 hover:scale-105"
              onClick={() => {
                const section = document.getElementById("portfolio");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Portfolio
            </button>
            <button
              className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-black transition-all duration-200 scale-100 hover:scale-105"
              onClick={() => {
                const section = document.getElementById("contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/90 text-gold text-center">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg md:text-xl">
            MB Pictures Canada Inc produces world-class feature films, shorts,
            music videos, and daily programs. We offer global line producer
            services to bring your vision to life with cinematic excellence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 bg-gradient-to-r from-black via-zinc-900 to-black text-gold"
      >
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            "Feature Films",
            "Shorts",
            "Music Videos",
            "Daily Programs",
            "Line Producing",
            "Distribution"
          ].map((service) => (
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

      {/* Portfolio / Projects Section */}
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

      {/* Events & Distribution Section */}
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

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="py-10 px-4 bg-gradient-to-r from-black via-zinc-900 to-black text-gold border-t border-gold flex flex-col md:flex-row items-center justify-between animate-fade-in-up">
        <div className="flex gap-6 mb-6 md:mb-0">
          <a
            href="#"
            className="hover:underline hover:text-yellow-400 transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="hover:underline hover:text-yellow-400 transition"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:underline hover:text-yellow-400 transition"
          >
            Twitter
          </a>
        </div>
        <div className="text-sm">© MB Pictures Canada {new Date().getFullYear()}</div>
        <div className="text-xs">Legal | Privacy Policy</div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        .text-gold { color: #FFD700; }
        .bg-gold { background-color: #FFD700; }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-slow { animation: fade-in 2s ease-out; }
        .animate-fade-in-up { animation: fade-in 1.5s cubic-bezier(.4,0,.2,1); }
      `}</style>
    </div>
  );
};

export default App;
