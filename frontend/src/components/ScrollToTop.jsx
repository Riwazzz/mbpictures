import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollTop}
      className={`fixed bottom-6 right-6 z-50 rounded-full p-2 md:p-3 border-2 border-gold/80 text-gold bg-white/10 backdrop-blur-md shadow-lg transition-all duration-300 hover:bg-white/20 hover:shadow-xl ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.53.22l6 6a.75.75 0 11-1.06 1.06L12 7.06 6.53 12.53a.75.75 0 11-1.06-1.06l6-6a.75.75 0 01.53-.22z" clipRule="evenodd" />
      </svg>
    </button>
  );
};

export default ScrollToTop;


