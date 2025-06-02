import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="w-10 h-10" />
            <span className="text-xl font-bold gradient-text">Ascend</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <Link href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
