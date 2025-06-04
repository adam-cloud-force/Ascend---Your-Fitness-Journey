'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  // Placeholder data - this would come from your backend in a real app
  const userStats = {
    workoutsCompleted: 0,
    currentStreak: 0,
    nextWorkout: 'Not scheduled',
    fitnessLevel: 'Beginner',
    goals: ['Build Muscle', 'Improve Strength']
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
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

      {/* Fog Effect */}
      <div className="fog-container">
        <div className="fog-layer fog-layer-1" />
        <div className="fog-layer fog-layer-2" />
        <div className="fog-layer fog-layer-3" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Welcome to Your Fitness Journey
          </h1>
          <p className="text-gray-400 text-lg">
            Track your progress, set new goals, and achieve greatness
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="card">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Workouts Completed</h3>
            <p className="text-3xl font-bold gradient-text">{userStats.workoutsCompleted}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Current Streak</h3>
            <p className="text-3xl font-bold gradient-text">{userStats.currentStreak} days</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Next Workout</h3>
            <p className="text-3xl font-bold gradient-text">{userStats.nextWorkout}</p>
          </div>
          <div className="card">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Fitness Level</h3>
            <p className="text-3xl font-bold gradient-text">{userStats.fitnessLevel}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <button 
            onClick={() => router.push('/workout')}
            className="card group hover:bg-blue-600/10 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400">
                  Start Workout
                </h3>
                <p className="text-gray-400">
                  Begin your next training session
                </p>
              </div>
              <svg 
                className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transform group-hover:translate-x-2 transition-all" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          <button 
            onClick={() => router.push('/progress')}
            className="card group hover:bg-purple-600/10 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400">
                  View Progress
                </h3>
                <p className="text-gray-400">
                  Check your fitness journey stats
                </p>
              </div>
              <svg 
                className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transform group-hover:translate-x-2 transition-all" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Goals Section */}
        <div className="card">
          <h2 className="text-2xl font-bold text-white mb-6">Your Goals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userStats.goals.map((goal, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
              >
                <p className="text-gray-300">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
