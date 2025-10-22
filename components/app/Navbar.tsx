import React from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Podcast", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-black/10 py-4 flex items-center justify-center fixed top-0 left-0 z-10">
      <div className="max-w-7xl w-full flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center h-[30px]">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-[30px] w-auto object-contain"
            style={{ minWidth: 72 }}
          />
        </div>
        {/* Nav Links */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#19283a] text-base font-medium px-2 py-1 hover:text-[#306de2] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Sign Up Button */}
        <a
          href="#"
          className="flex items-center bg-[#306de2] border border-[#1566f1] text-white rounded-xl px-6 py-2.5 font-semibold text-base shadow hover:bg-[#2051a7] transition-colors group"
          style={{ minWidth: 87, minHeight: 36 }}
        >
          <span className="mr-2 flex items-center">
            {/* Left Arrow Icon (optional, hidden for now) */}
          </span>
          Sign Up
          <span className="ml-2 flex items-center">
            {/* Right Arrow SVG */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66699 8H13.3337" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.66699 3.33325L13.3337 7.99992L8.66699 12.6666" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;