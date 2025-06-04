'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try {
      console.log('Login attempt:', { email: formData.email })
      
      // TODO: Replace this with actual authentication
      // For now, we'll simulate a new user that needs onboarding
      const isNewUser = true
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (isNewUser) {
        console.log('New user detected, redirecting to onboarding...')
        await router.push('/onboarding')
      } else {
        console.log('Existing user, redirecting to dashboard...')
        await router.push('/dashboard')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Invalid credentials. Please try again.')
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
      // For now, always treat Google sign-in users as new users
      await signIn('google', { callbackUrl: '/onboarding' })
    } catch (err) {
      console.error('Google sign in error:', err)
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
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

      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />

      {/* Login Form */}
      <div className="w-full max-w-md space-y-6 animate-fade-in-up px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-2">Welcome Back</h2>
          <p className="text-gray-400">Continue your journey to greatness</p>
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2.5 px-4 bg-gray-900/30 text-white font-bold rounded-lg
                   transform transition-all duration-300 ease-out
                   border border-white/20 backdrop-blur-sm
                   shadow-[0_0_15px_rgba(255,255,255,0.1)]
                   hover:bg-gray-800/50 hover:scale-105
                   hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                   hover:border-white/40
                   active:scale-95 active:shadow-inner
                   flex items-center justify-center space-x-2"
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

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-400 bg-[rgb(8,8,12)]">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full px-4 py-2.5 bg-gray-900/50 border border-white/10 rounded-lg 
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
              className="w-full px-4 py-2.5 bg-gray-900/50 border border-white/10 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                        text-white placeholder-gray-500 backdrop-blur-sm"
              placeholder="Enter your password"
            />
            <div className="text-right mt-1">
              <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </Link>
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
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
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
          <path
            className="fog-path fog-path-4"
            d="M-200,255 
               C200,240 350,270 550,250 
               C750,230 950,260 1200,245 
               L1200,300 L-200,300 Z"
          />
          <path
            className="fog-path fog-path-5"
            d="M-200,265 
               C100,255 300,235 500,260 
               C700,285 900,245 1200,265 
               L1200,300 L-200,300 Z"
          />
        </svg>
      </div>
    </div>
  )
} 