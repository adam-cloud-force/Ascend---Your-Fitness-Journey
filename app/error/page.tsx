'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-500 mb-2">Authentication Error</h2>
          <p className="text-gray-300 mb-6">
            {error === 'AccessDenied' && 'You do not have permission to sign in.'}
            {error === 'Configuration' && 'There is a problem with the server configuration.'}
            {error === 'Verification' && 'The verification link was invalid or has expired.'}
            {!error && 'An unknown error occurred.'}
          </p>
          <Link 
            href="/login"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
} 