"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-tight">
          <a href="#hero">VyomGarud</a>
        </div>

        {/* Menu Links */}
        <ul className="flex space-x-6 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-[#ff7b00] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#capabilities" className="hover:text-[#ff7b00] transition-colors">
              Capabilities
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#ff7b00] transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
