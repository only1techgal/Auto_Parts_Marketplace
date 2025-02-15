// src/components/marketplace/PartCard.tsx
import React from 'react'
import Image from 'next/image'
import { Heart, ShoppingCart } from 'lucide-react'

interface PartCardProps {
  id: string
  title: string
  price: number
  description: string
  condition: string
  imageUrl: string
  seller: {
    name: string
    rating: number
  }
  onAddToCart?: () => void
  onAddToWishlist?: () => void
}

const PartCard: React.FC<PartCardProps> = ({
  title,
  price,
  description,
  condition,
  imageUrl,
  seller,
  onAddToCart,
  onAddToWishlist
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-blue-600">${price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">Condition: {condition}</span>
        </div>
        
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-600">Seller: {seller.name}</span>
          <div className="ml-2 flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 ml-1">{seller.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={onAddToCart}
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
          <button
            onClick={onAddToWishlist}
            className="p-2 text-gray-600 hover:text-red-500 transition-colors border rounded-lg"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PartCard
