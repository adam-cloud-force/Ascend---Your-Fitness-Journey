'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      // TODO: Implement actual signup logic
      console.log('Signup attempt:', { email: formData.email, name: formData.name })
      // Temporary simulation of signup
      await new Promise(resolve => setTimeout(resolve, 1000))
      router.push('/dashboard')
    } catch (err) {
      setError('Failed to create account. Please try again.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />

      {/* Signup Form */}
      <div className="w-full max-w-md space-y-8 animate-fade-in-up">
        <div className="text-center">
          <h2 className="text-4xl font-bold gradient-text mb-2">Begin Your Journey</h2>
          <p className="text-gray-400">Create your account and start ascending</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                          text-white placeholder-gray-500 backdrop-blur-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                          text-white placeholder-gray-500 backdrop-blur-sm"
                placeholder="Create a password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg 
                          focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                          text-white placeholder-gray-500 backdrop-blur-sm"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center animate-fade-in-up">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary w-full flex justify-center"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-white hover:text-gray-200 transition-colors">
            Sign in
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