'use client'

import React, { useState } from 'react'
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
      console.log('Signup attempt:', { email: formData.email, name: formData.name })
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

  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', { callbackUrl: '/dashboard' })
    } catch (err) {
      console.error('Google sign in error:', err)
    }
  }

  // Function to get random positions for rain drops
  const getRainDrops = () => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 0.5 + Math.random() * 0.3,
      opacity: Math.random() * 0.3 + 0.2,
      initialOffset: -(Math.random() * 100) // Initial vertical offset
    }));
  };

  const rainDrops = getRainDrops();

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Rain Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {rainDrops.map((drop) => (
          <div
            key={drop.id}
            className="rain-drop"
            style={{
              left: `${drop.left}%`,
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
              opacity: drop.opacity,
              top: `${drop.initialOffset}%`
            }}
          />
        ))}
      </div>

      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />

      {/* Signup Form */}
      <div className="w-full max-w-md space-y-6 animate-fade-in-up px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold gradient-text mb-2">Begin Your Journey</h2>
          <p className="text-gray-400">Create your account and start ascending</p>
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

        <form onSubmit={handleSubmit} className="space-y-3">
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
              className="w-full px-4 py-2.5 bg-gray-900/50 border border-white/10 rounded-lg 
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
              className="w-full px-4 py-2.5 bg-gray-900/50 border border-white/10 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent
                        text-white placeholder-gray-500 backdrop-blur-sm"
              placeholder="Confirm your password"
            />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center animate-fade-in-up">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary w-full flex justify-center mt-2"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-white hover:text-gray-200 transition-colors">
            Sign in
          </Link>
        </p>
      </div>

      {/* Fog Effect at Bottom */}
      <div className="fog-container fixed bottom-0 left-0 right-0 pointer-events-none" style={{ height: '90vh' }}>
        <svg className="fog-svg absolute bottom-0 left-[-25%] w-[150%]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          {/* Base layer - wide and slow */}
          <path
            className="fog-path fog-path-1"
            d="M-300,850 
               C0,820 200,900 500,850
               C800,800 1000,900 1300,850
               L1300,1000 L-300,1000 Z"
            style={{ filter: 'blur(10px)' }}
          />
          
          {/* Middle layer - more dramatic curves */}
          <path
            className="fog-path fog-path-2"
            d="M-300,880
               C100,800 300,950 500,880
               C700,810 900,950 1300,880
               L1300,1000 L-300,1000 Z"
            style={{ filter: 'blur(20px)' }}
          />
          
          {/* Detailed front layer */}
          <path
            className="fog-path fog-path-3"
            d="M-300,900
               C-100,880 0,920 200,900
               C400,880 600,920 800,900
               C1000,880 1200,920 1300,900
               L1300,1000 L-300,1000 Z"
            style={{ filter: 'blur(8px)' }}
          />

          {/* Dynamic wave layer */}
          <path
            className="fog-path fog-path-4"
            d="M-300,920
               C-200,910 -100,930 0,920
               C200,900 400,940 600,920
               C800,900 1000,940 1300,920
               L1300,1000 L-300,1000 Z"
            style={{ filter: 'blur(5px)' }}
          />

          {/* Thin detail layer */}
          <path
            className="fog-path fog-path-5"
            d="M-300,940
               C-100,930 100,950 300,940
               C500,930 700,950 900,940
               C1100,930 1200,950 1300,940
               L1300,1000 L-300,1000 Z"
            style={{ filter: 'blur(3px)' }}
          />
        </svg>
      </div>
    </div>
  )
} 