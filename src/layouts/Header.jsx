function Header() {
  return (
    <header
      className="max-w-3xl mx-auto flex items-center justify-between gap-4 
      bg-white/10 backdrop-blur-md border border-white/20 
      text-white p-4 rounded-2xl shadow-md"
    >
      <div className="logo">
        <h2 className="text-2xl md:text-4xl font-bold font-Orbitron ">JAMAL</h2>
      </div>

      <nav>
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
    </header>
  );
}

export default Header;
