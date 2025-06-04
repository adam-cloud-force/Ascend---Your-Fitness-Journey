'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      console.log('Starting signup process...')
      // TODO: Implement actual signup logic
      console.log('Signup attempt:', { email: formData.email, name: formData.name })
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Redirecting to onboarding...')
      await router.push('/onboarding')
      console.log('Redirect complete')
    } catch (err) {
      console.error('Error during signup:', err)
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

  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/onboarding' })
    } catch (err) {
      console.error('Google sign in error:', err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden py-20">
      {/* Intense Fog Effect */}
      <div className="fog-container">
        <div className="fog-layer fog-layer-1" />
        <div className="fog-layer fog-layer-2" />
        <div className="fog-layer fog-layer-3" />
      </div>

      {/* Rain Effect */}
      <div className="rain-container">
        {Array.from({ length: 150 }, (_, index) => {
          const randomInitialY = Math.random() * -100
          return (
            <div
              key={index}
              className="rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${0.8 + Math.random() * 0.4}s`,
                animationDelay: `${Math.random() * 2}s`,
                '--initial-y': `${randomInitialY}%`
              } as React.CSSProperties}
            />
          )
        })}
      </div>

      {/* Signup Form */}
      <div className="w-full max-w-md p-8 bg-gray-800/60 backdrop-blur-2xl rounded-xl shadow-lg border border-gray-700/50 relative z-10 mx-4 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
            Begin Your Journey
          </h2>
          <p className="text-xl text-gray-300">Create your account and start ascending</p>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full mb-6 py-3 px-4 bg-white hover:bg-gray-100 text-gray-900 font-bold rounded-full
                   transition duration-300 flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-400 bg-gray-800/80">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        text-white placeholder-gray-400"
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
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        text-white placeholder-gray-400"
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
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        text-white placeholder-gray-400"
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
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        text-white placeholder-gray-400"
              placeholder="Confirm your password"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full
                     transition duration-300 mt-6"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
} 