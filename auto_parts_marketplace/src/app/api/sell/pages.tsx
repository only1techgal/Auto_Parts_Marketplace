import ListingForm from '@/components/forms/ListingForm'

export default function SellPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">List Your Auto Part</h1>
        <ListingForm />
      </div>
    </div>
  )
}
