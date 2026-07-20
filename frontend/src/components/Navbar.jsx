import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Logo from './Logo'; 

const Navbar = () => {
  const { user, logout } = useAuth();
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold hover:scale-105 transition-transform duration-300"
        >
          <Logo /> {/* Custom logo component */}
          <span className="text-gradient">Resume Builder</span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="p-2 rounded-full hover:bg-gray-200/30 dark:hover:bg-gray-700/30 transition-colors duration-200"
          >
            {dark ? (
              <SunIcon className="h-5 w-5 text-yellow-400 hover:rotate-180 transition-transform duration-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-indigo-600 hover:rotate-180 transition-transform duration-500" />
            )}
          </button>
          {user ? (
            <>
              <span className="text-gray-700 dark:text-gray-200 font-medium">{user.name}</span>
              <button
                onClick={logout}
                className="btn-gradient text-sm px-5 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                Login
              </Link>
              <Link to="/register" className="btn-gradient text-sm px-5 py-2">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;