import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);  
  

  return (
    <nav className="bg-gray-900 text-white sticky top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <span>BootPress</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">

          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="hover:text-yellow-400 transition duration-300"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center py-3 space-y-2">
          <li>
            <Link
              to="/"
              className="block py-2 hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              className="block py-2 hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 hover:text-yellow-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
