// src/app/dashboard/page.tsx
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import PartCard from '@/components/marketplace/PartCard'

export default async function DashboardPage() {
  const session = await getServerSession()
  
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Your Dashboard</h1>
      
      {/* Active Listings */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Your Active Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your listings grid here */}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {/* Add activity list here */}
        </div>
      </section>

      {/* Account Stats */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Account Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Sales', value: '0' },
            { label: 'Active Listings', value: '0' },
            { label: 'Views This Month', value: '0' }
          ].map((stat) => (
            <div key={stat.label} className="p-6 bg-white rounded-lg shadow">
              <p className="text-gray-600">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
