import React from "react";
import { socialLinks } from "../constants/data";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-gradient-to-r from-black via-zinc-900 to-black text-gold border-t border-gold flex flex-col md:flex-row items-center justify-between animate-fade-in-up">
      <div className="flex gap-6 mb-6 md:mb-0">
        {socialLinks.map((link) => (
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
