'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      // TODO: Implement actual authentication logic
      console.log('Login attempt:', { email })
      // Temporary simulation of login
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/dashboard')
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />

      {/* Login Form */}
      <div className="w-full max-w-md space-y-8 animate-fade-in-up">
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text mb-2">Welcome Back</h2>
          <p className="text-gray-400">Continue your journey to greatness</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                          text-white placeholder-gray-500 backdrop-blur-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                          text-white placeholder-gray-500 backdrop-blur-sm"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center animate-fade-in-up">
              {error}
            </div>
          )}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 bg-gray-900 border-white/10 rounded" />
              <span className="ml-2 text-gray-300">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-gray-300 hover:text-white transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn-primary w-full flex justify-center"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-white hover:text-gray-200 transition-colors">
            Sign up
          </Link>
        </p>
      </div>

      {/* Fog Effect */}
      <div className="fog-container">
        <svg className="fog-svg" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path
            className="fog-path fog-path-1"
            d="M-200,260 
               C100,250 200,200 400,230 
               C600,260 800,220 1200,250 
               L1200,300 L-200,300 Z"
          />
          <path
            className="fog-path fog-path-2"
            d="M-200,250 
               C50,270 300,220 500,260 
               C700,280 900,240 1200,270 
               L1200,300 L-200,300 Z"
          />
          <path
            className="fog-path fog-path-3"
            d="M-200,270 
               C150,240 400,280 600,250 
               C800,220 1000,260 1200,240 
               L1200,300 L-200,300 Z"
          />
        </svg>
      </div>
    </div>
  )
} 