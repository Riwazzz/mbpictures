import React, { useEffect, useRef, useState } from "react";

const Header = () => {
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

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMobileMenuClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    const menu = document.getElementById("hamburger-menu");
    if (menu) menu.classList.add("hidden");
  };

  const toggleMobileMenu = () => {
    const menu = document.getElementById("hamburger-menu");
    if (menu) menu.classList.toggle("hidden");
  };

  return (
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
        {["Home", "Line Production", "Services", "Portfolio", "News", "Events"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className={`font-medium hover:text-yellow-400 transition text-lg ${
              headerBg ? "text-black/80" : "text-white"
            }`}
            onClick={(e) => handleNavClick(e, link.toLowerCase().replace(/\s+/g, '-'))}
            onMouseEnter={() => {
              if (window.innerWidth >= 768) {
                const section = document.getElementById(link.toLowerCase().replace(/\s+/g, '-'));
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
          onClick={toggleMobileMenu}
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
          {[
            { id: 'about', label: 'About' },
            { id: 'line-production', label: 'Line Production' },
            { id: 'services', label: 'Services' },
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'news', label: 'News' },
            { id: 'events', label: 'Events' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-gold font-medium hover:text-yellow-400 transition text-lg"
              onClick={(e) => handleMobileMenuClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
