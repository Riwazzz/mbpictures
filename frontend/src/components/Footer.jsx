import React from "react";
import { useContent } from "../context/ContentContext.jsx";

const Footer = () => {
  const { data } = useContent();
  const links = data?.footer?.socialLinks || [];

  return (
    <footer className="py-10 px-4 bg-gradient-to-r from-black via-zinc-900 to-black text-gold border-t border-gold flex flex-col md:flex-row items-center justify-between animate-fade-in-up">
      <div className="flex gap-6 mb-6 md:mb-0">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:underline hover:text-yellow-400 transition"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="text-sm">© MB Pictures Canada {new Date().getFullYear()}</div>
      <div className="text-xs">Legal | Privacy Policy</div>
    </footer>
  );
};

export default Footer;
