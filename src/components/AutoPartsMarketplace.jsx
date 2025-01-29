import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import Cart from './Cart';

// Sample data
const products = [
  {
    id: 1,
    name: "Brake Pad Set",
    price: 89.99,
    rating: 4.5,
    compatibility: ["Toyota", "Honda", "Ford"],
    image: "/api/placeholder/200/200",
    description: "High-performance ceramic brake pads"
  },
  {
    id: 2,
    name: "Oil Filter Premium",
    price: 12.99,
    rating: 4.8,
    compatibility: ["All Models"],
    image: "/api/placeholder/200/200",
    description: "Premium quality oil filter"
  },
  {
    id: 3,
    name: "Air Filter System",
    price: 34.99,
    rating: 4.3,
    compatibility: ["BMW", "Mercedes", "Audi"],
    image: "/api/placeholder/200/200",
    description: "High-flow air filtration system"
  }
];

const AutoPartsMarketplace = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartItems={cartItems} onCartClick={() => setShowCart(!showCart)} />
      
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="col-span-1">
            <Sidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Product Grid */}
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform">
          <Cart
            items={cartItems}
            onRemoveFromCart={removeFromCart}
          />
        </div>
      )}
    </div>
  );
};

export default AutoPartsMarketplace;
