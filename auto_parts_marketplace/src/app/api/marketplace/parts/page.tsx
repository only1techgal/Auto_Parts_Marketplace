import PartGrid from '@/components/marketplace/PartGrid'
import SearchFilters from '@/components/marketplace/SearchFilters'

export default function PartsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <SearchFilters />
        </aside>
        
        <main className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Browse Auto Parts</h1>
          <PartGrid />
        </main>
      </div>
    </div>
  )
}
