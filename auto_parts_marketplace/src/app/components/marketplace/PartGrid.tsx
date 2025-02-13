import PartCard from './PartCard'

interface Part {
  id: string
  title: string
  price: number
  image: string
  condition: string
  location: string
}

interface PartGridProps {
  parts: Part[]
}

export default function PartGrid({ parts }: PartGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {parts.map((part) => (
        <PartCard key={part.id} {...part} />
      ))}
    </div>
  )
}
