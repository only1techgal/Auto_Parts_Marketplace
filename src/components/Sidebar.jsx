import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';

const categories = [
  "Brakes", "Engine Parts", "Filters", 
  "Suspension", "Electrical", "Body Parts"
];

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center mb-4">
        <Filter size={20} className="mr-2" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Categories</h3>
        <ul>
          <li className="mb-2">
            <button
              className={`w-full text-left p-2 rounded ${
                selectedCategory === "All" ? "bg-blue-50 text-blue-600" : ""
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              All Categories
            </button>
          </li>
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <button
                className={`w-full text-left p-2 rounded ${
                  selectedCategory === category ? "bg-blue-50 text-blue-600" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Min"
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Max"
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* Vehicle Compatibility */}
      <div>
        <h3 className="font-medium mb-2">Vehicle Compatibility</h3>
        <div className="relative">
          <select className="w-full p-2 border rounded appearance-none">
            <option>Select Make</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Ford</option>
            <option>BMW</option>
          </select>
          <ChevronDown className="absolute right-2 top-3 text-gray-400" size={16} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
