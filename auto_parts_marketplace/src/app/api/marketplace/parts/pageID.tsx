import { notFound } from 'next/navigation'
import PriceDisplay from '@/components/marketplace/PriceDisplay'

interface PartPageProps {
  params: { id: string }
}

export default async function PartPage({ params }: PartPageProps) {
  // This would be replaced with your actual data fetching logic
  const part = await getPart(params.id)
  
  if (!part) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images */}
        <div className="space-y-4">
          {/* Add image gallery component here */}
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold">{part.title}</h1>
          <PriceDisplay price={part.price} />
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{part.description}</p>
          </div>

          {/* Additional details */}
        </div>
      </div>
    </div>
  )
}
