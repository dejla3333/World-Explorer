import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'World Explorer',
  description: 'Explore countries around the world',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white min-h-screen">
        <Navbar />

        <main className="min-h-screen container mx-auto px-4 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}