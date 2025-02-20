// components/marketplace/PartGrid.tsx
import PartCard from './PartCard'

interface Part {
  id: string
  title: string
  price: number
  condition: 'new' | 'used' | 'refurbished'
  imageUrl: string
  location: string
  seller: {
    name: string
    rating: number
  }
  listingDate: string
}

interface PartGridProps {
  parts: Part[]
  loading?: boolean
}

export default function PartGrid({ parts, loading = false }: PartGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
              <div className="h-4 bg-gray-200 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (parts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No parts found</h3>
        <p className="text-gray-600">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {parts.map((part) => (
        <PartCard key={part.id} {...part} />
      ))}
    </div>
  )
}
