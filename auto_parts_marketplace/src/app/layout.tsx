// app/layout.tsx
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Auto Parts Marketplace',
  description: 'Buy and sell auto parts online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
