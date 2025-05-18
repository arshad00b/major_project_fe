import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-700">CoalSupply</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <button>
            <Link to='/' className="block w-full text-left hover:text-blue-700 focus:outline-none">Home</Link>
          </button>
          <button>
            <Link to='/about' className="block w-full text-left hover:text-blue-700 focus:outline-none">About Us</Link>
          </button>
          <button>
            <Link to='/contact' className="block w-full text-left hover:text-blue-700 focus:outline-none">Contact Us</Link>
          </button>
          <button>
            <Link to='/order' className="block w-full text-left hover:text-blue-700 focus:outline-none">Order</Link>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <button>
            <Link to='/' className="block w-full text-left hover:text-blue-700 focus:outline-none">Home</Link>
          </button>
          <button>
            <Link to='/about' className="block w-full text-left hover:text-blue-700 focus:outline-none">About Us</Link>
          </button>
          <button>
            <Link to='/contact' className="block w-full text-left hover:text-blue-700 focus:outline-none">Contact Us</Link>
          </button>
          <button>
            <Link to='/order' className="block w-full text-left hover:text-blue-700 focus:outline-none">Order</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
