export default function SearchFilters() {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="flex space-x-4">
            <input
              type="number"
              placeholder="Min"
              className="w-full border rounded px-3 py-2"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-full border rounded px-3 py-2"
            />
          </div>
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">Condition</h3>
          <div className="space-y-2">
            {['New', 'Used - Like New', 'Used - Good', 'Used - Fair'].map((condition) => (
              <label key={condition} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {condition}
              </label>
            ))}
          </div>
        </div>
  
        <div>
          <h3 className="font-semibold mb-2">Location</h3>
          <input
            type="text"
            placeholder="Enter location..."
            className="w-full border rounded px-3 py-2"
          />
        </div>
  
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Apply Filters
        </button>
      </div>
    )
  }
