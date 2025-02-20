// app/parts/page.tsx
import SearchFilters from '@/components/marketplace/SearchFilters'
import PartGrid from '@/components/marketplace/PartGrid'

export default function PartsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar with filters */}
        <div className="w-64 flex-shrink-0">
          <SearchFilters 
            onFilterChange={(filters) => {
              // Handle filter changes
              console.log(filters)
            }} 
          />
        </div>

        {/* Main content */}
        <div className="flex-1">
          <PartGrid 
            parts={[
              // Your parts data here
            ]} 
          />
        </div>
      </div>
    </div>
  )
}
