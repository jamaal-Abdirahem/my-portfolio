import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="max-w-3xl mx-auto flex items-center justify-between gap-4 
      bg-white/10 backdrop-blur-md border border-white/20 
      text-white p-4 rounded-2xl shadow-md relative"
    >
      {/* Logo */}
      <div className="logo">
        <h2 className="text-2xl md:text-4xl font-bold font-Orbitron">JAMAL</h2>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 capitalize">
          {["Home", "About", "Projects", "Contact"].map((link) => (
            <li key={link} className="relative cursor-pointer group">
              <span className="hover:text-blue-400 transition-colors duration-300">
                {link}
              </span>
              {/* Underline effect */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav
          className="absolute top-full left-0 w-full mt-2 
    bg-gray-900/95 text-white shadow-lg 
    rounded-2xl p-4 md:hidden z-50"
        >
          <ul className="flex flex-col items-center gap-4 capitalize">
            {["Home", "About", "Projects", "Contact"].map((link) => (
              <li
                key={link}
                className="relative cursor-pointer group"
                onClick={() => setIsOpen(false)} // close menu on click
              >
                <span className="hover:text-blue-400 transition-colors duration-300">
                  {link}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
