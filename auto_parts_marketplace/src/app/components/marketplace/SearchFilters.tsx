// components/marketplace/SearchFilters.tsx
'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { CheckboxGroup, Checkbox } from '@/components/ui/checkbox'

interface FilterState {
  condition: string[]
  priceRange: [number, number]
  category: string[]
  location: string
  sortBy: string
}

interface SearchFiltersProps {
  onFilterChange: (filters: FilterState) => void
}

export default function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    condition: [],
    priceRange: [0, 5000],
    category: [],
    location: '',
    sortBy: 'newest'
  })

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <div className="space-y-6 p-4 bg-white rounded-lg border border-gray-100">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Filters</h3>
        
        {/* Condition */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Condition</h4>
          <CheckboxGroup 
            value={filters.condition}
            onChange={(value) => handleFilterChange({ condition: value })}
          >
            <Checkbox value="new">New</Checkbox>
            <Checkbox value="used">Used</Checkbox>
            <Checkbox value="refurbished">Refurbished</Checkbox>
          </CheckboxGroup>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Price Range</h4>
          <Slider
            range
            min={0}
            max={5000}
            value={filters.priceRange}
            onChange={(value) => handleFilterChange({ priceRange: value as [number, number] })}
          />
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filters.category[0] || ''}
            onChange={(e) => handleFilterChange({ category: [e.target.value] })}
          >
            <option value="">All Categories</option>
            <option value="engine">Engine Parts</option>
            <option value="transmission">Transmission</option>
            <option value="suspension">Suspension</option>
            <option value="brakes">Brakes</option>
            <option value="electrical">Electrical</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Location</h4>
          <input
            type="text"
            placeholder="Enter zip code"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filters.location}
            onChange={(e) => handleFilterChange({ location: e.target.value })}
          />
        </div>

        {/* Sort By */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Sort By</h4>
          <select
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={filters.sortBy}
            onChange={(e) => handleFilterChange({ sortBy: e.target.value })}
          >
            <option value="newest">Newest First</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="rating">Best Rated</option>
          </select>
        </div>
      </div>
    </div>
  )
}
