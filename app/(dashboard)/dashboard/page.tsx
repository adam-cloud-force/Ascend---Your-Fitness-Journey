'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Welcome to Your Dashboard</h1>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Workouts Completed</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Current Streak</h3>
            <p className="text-3xl font-bold text-white">0 days</p>
          </div>
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Minutes</h3>
            <p className="text-3xl font-bold text-white">0</p>
          </div>
        </div>

        {/* Workout Programs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Workout Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Beginner Strength</h3>
              <p className="text-gray-400 mb-4">Perfect for those just starting their fitness journey</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Start Program
              </button>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-3">Cardio Blast</h3>
              <p className="text-gray-400 mb-4">High-intensity cardio workouts for endurance</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Start Program
              </button>
            </div>
          </div>
        </section>

        {/* Progress Charts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Progress</h2>
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <p className="text-gray-400 text-center py-8">Progress charts will appear here as you complete workouts</p>
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="bg-gray-800/60 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
            <p className="text-gray-400 text-center py-8">No recent activity to display</p>
          </div>
        </section>
      </div>
    </div>
  )
} 