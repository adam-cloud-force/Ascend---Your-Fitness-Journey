'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      // TODO: Implement actual password reset logic
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated API call
      setStatus('success')
      setMessage('Password reset instructions have been sent to your email.')
    } catch (err) {
      setStatus('error')
      setMessage('Failed to send reset instructions. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden py-20">
      {/* Fog Effect */}
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

      <div className="w-full max-w-md p-8 bg-gray-800/60 backdrop-blur-2xl rounded-xl shadow-lg border border-gray-700/50 relative z-10 mx-4 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
            Reset Your Password
          </h2>
          <p className="text-gray-300">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          </div>

          {message && (
            <div className={`text-sm text-center ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full py-3 px-8 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full
                     transition duration-300 flex items-center justify-center
                     ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : 'Send Reset Instructions'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          Remember your password?{' '}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
} 