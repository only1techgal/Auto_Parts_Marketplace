// src/components/HomePage.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingCart, Menu, X, Heart } from 'lucide-react';

interface Category {
  name: string;
  image: string;
  count: string;
}

interface Product {
  name: string;
  price: number;
  rating: number;
  image: string;
}

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const featuredCategories: Category[] = [
    { name: 'Engine Parts', image: '/api/placeholder/200/200', count: '2,345 items' },
    { name: 'Brake System', image: '/api/placeholder/200/200', count: '1,892 items' },
    { name: 'Transmission', image: '/api/placeholder/200/200', count: '1,234 items' },
    { name: 'Suspension', image: '/api/placeholder/200/200', count: '987 items' },
  ];

  const featuredProducts: Product[] = [
    {
      name: 'High Performance Brake Pads',
      price: 89.99,
      rating: 4.5,
      image: '/api/placeholder/300/200'
    },
    {
      name: 'OEM Engine Oil Filter',
      price: 12.99,
      rating: 4.8,
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Performance Air Intake Kit',
      price: 199.99,
      rating: 4.7,
      image: '/api/placeholder/300/200'
    },
    {
      name: 'Heavy Duty Battery',
      price: 159.99,
      rating: 4.6,
      image: '/api/placeholder/300/200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                className="sm:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <Link href="/" className="text-2xl font-bold text-blue-600">
                AutoParts
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Search for parts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden sm:flex items-center space-x-8">
              <Link href="/categories" className="text-gray-600 hover:text-blue-600">
                Categories
              </Link>
              <Link href="/deals" className="text-gray-600 hover:text-blue-600">
                Deals
              </Link>
              <Link href="/wishlist" className="text-gray-600 hover:text-blue-600">
                <Heart size={24} />
              </Link>
              <Link href="/cart" className="text-gray-600 hover:text-blue-600">
                <ShoppingCart size={24} />
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/categories" className="block px-3 py-2 text-gray-600">
                Categories
              </Link>
              <Link href="/deals" className="block px-3 py-2 text-gray-600">
                Deals
              </Link>
              <Link href="/wishlist" className="block px-3 py-2 text-gray-600">
                Wishlist
              </Link>
              <Link href="/cart" className="block px-3 py-2 text-gray-600">
                Cart
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Find the Right Parts for Your Vehicle</h1>
          <p className="text-xl mb-8">Quality auto parts at competitive prices</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                <p className="text-gray-600">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <span className="text-yellow-400">★ {product.rating}</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vehicle Selector (Bonus Feature) */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center">Find Parts for Your Vehicle</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <select className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Make</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
              <option value="ford">Ford</option>
            </select>
            <select className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Model</option>
              <option value="camry">Camry</option>
              <option value="civic">Civic</option>
              <option value="f150">F-150</option>
            </select>
            <select className="p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Search Parts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
