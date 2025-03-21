import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10 text-center">
      <div className="container mx-auto">
        {/* Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/movies" className="hover:text-yellow-400 transition">
            Movies
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} BootPress. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
