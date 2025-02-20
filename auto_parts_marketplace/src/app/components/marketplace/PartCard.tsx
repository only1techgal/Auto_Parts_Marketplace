// components/marketplace/PartCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Share2 } from 'lucide-react'
import PriceDisplay from './PriceDisplay'

interface PartCardProps {
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

export default function PartCard({
  id,
  title,
  price,
  condition,
  imageUrl,
  location,
  seller,
  listingDate,
}: PartCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/parts/${id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="rounded-t-lg object-cover"
          />
          <div className="absolute top-2 right-2 flex gap-2">
            <button className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <Link href={`/parts/${id}`} className="hover:text-purple-600">
            <h3 className="font-medium text-gray-900 line-clamp-2">{title}</h3>
          </Link>
          <PriceDisplay amount={price} className="text-lg font-bold" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="capitalize">{condition}</span>
            <span>{location}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <span className="text-gray-600">{seller.name}</span>
              <span className="text-yellow-400">★</span>
              <span className="text-gray-500">{seller.rating}</span>
            </div>
            <span className="text-gray-500">{listingDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
