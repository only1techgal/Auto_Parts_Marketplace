// components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-6 mt-12 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-purple-700 hover:text-purple-900">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-purple-700 hover:text-purple-900">Contact</Link>
              </li>
              <li>
                <Link href="/terms" className="text-purple-700 hover:text-purple-900">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-purple-700 hover:text-purple-900">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="space-y-2">
            <p>Email: support@autoparts.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mt-8">
        © 2025 AutoParts Marketplace. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
