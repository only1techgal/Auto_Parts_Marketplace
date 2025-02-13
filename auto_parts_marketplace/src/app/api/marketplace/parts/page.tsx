import PartGrid from '@/components/marketplace/PartGrid'
import SearchFilters from '@/components/marketplace/SearchFilters'

export default function PartsPage() {
  // This would typically fetch from your API
  const parts = [
    {
      id: '1',
      title: 'BMW M3 Brake Rotors',
      price: 299.99,
      image: '/images/parts/brakes.jpg',
      condition: 'New',
      location: 'Los Angeles, CA'
    },
    // Add more sample parts...
  ]

  return (
    <div className="container mx-auto">
      <div className="flex gap-8">
        <div className="w-64 flex-shrink-0">
          <SearchFilters />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Browse Auto Parts</h1>
          <PartGrid parts={parts} />
        </div>
      </div>
    </div>
  )
}
