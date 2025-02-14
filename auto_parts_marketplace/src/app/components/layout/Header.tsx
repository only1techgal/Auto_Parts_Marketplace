import Link from 'next/link'
import { Search } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-gray-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          AutoParts Market
        </Link>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search parts..."
              className="pl-10 pr-4 py-2 border rounded-lg"
              ariel-label="Search parts"
            />
            <Search 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600"
            size={20}
            />
          </div>
          
          <nav className="space-x-4">
            <Link href="/parts" className="hover:text-blue-600">Browse</Link>
            <Link href="/sell" className="hover:text-blue-600">Sell</Link>
            <Link href="/login" className="hover:text-blue-600">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
