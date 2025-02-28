import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Homepage Link */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            AutoParts Marketplace
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-900">
              Categories
            </Link>
            <Link href="/cart" className="text-gray-600 hover:text-gray-900">
              Cart
            </Link>
          </div>

          {/* Auth Links (Register & Login) */}
          <div className="flex space-x-4">
            <Link href="/auth/register" className="text-blue-600 hover:text-blue-800 font-medium">
              Register
            </Link>
            <Link href="/auth/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
