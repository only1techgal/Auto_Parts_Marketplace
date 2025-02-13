import Image from 'next/image'
import Link from 'next/link'
import { formatCurrency } from '@/lib/utils'

interface PartCardProps {
  id: string
  title: string
  price: number
  image: string
  condition: string
  location: string
}

export default function PartCard({ id, title, price, image, condition, location }: PartCardProps) {
  return (
    <Link href={`/parts/${id}`} className="group">
      <div className="border rounded-lg overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-blue-600">{title}</h3>
          <p className="text-xl font-bold mt-2">{formatCurrency(price)}</p>
          
          <div className="mt-2 text-sm text-gray-600">
            <p>Condition: {condition}</p>
            <p>Location: {location}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
