import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ascend - Your Fitness Journey',
  description: 'Transform your fitness journey with personalized workouts and expert guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <span className="text-xl font-bold text-white">Ascend</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      Login
                    </a>
                    <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </nav>
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
} 