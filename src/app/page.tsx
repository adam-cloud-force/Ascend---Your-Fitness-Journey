'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-white relative min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Transform Your Fitness Journey
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Your all-in-one platform for workout reminders, hydration tracking, and expert calisthenics guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Start Your Journey
          </Link>
          <Link
            href="/features"
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Smart Workout Reminders"
            description="Never miss a workout with personalized reminders tailored to your schedule."
            icon="🏋️‍♂️"
          />
          <FeatureCard
            title="Hydration Tracking"
            description="Stay on top of your daily water intake with smart tracking and reminders."
            icon="💧"
          />
          <FeatureCard
            title="Calisthenics Mastery"
            description="Learn proper form and progression with our comprehensive calisthenics guides."
            icon="💪"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 text-center relative z-10">
        <h2 className="text-3xl font-bold mb-8">Start Your Fitness Journey Today</h2>
        <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <h3 className="text-2xl font-bold mb-4">Premium Membership</h3>
          <p className="text-3xl font-bold mb-4">$9.99<span className="text-lg text-gray-400">/month</span></p>
          <ul className="text-left mb-8 space-y-2">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Personalized Workout Plans
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Hydration Tracking
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Expert Calisthenics Guides
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Progress Analytics
            </li>
          </ul>
          <Link
            href="/signup"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Fog Effect */}
      <div className="fog-container fixed bottom-0 left-0 right-0 pointer-events-none" style={{ height: '90vh' }}>
        <svg className="fog-svg absolute bottom-0 left-[-25%] w-[150%]" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path
            className="fog-path fog-path-1"
            d="M-300,850 
               C0,820 200,900 500,850
               C800,800 1000,900 1300,850
               L1300,1000 L-300,1000 Z"
          />
          <path
            className="fog-path fog-path-2"
            d="M-300,880
               C100,800 300,950 500,880
               C700,810 900,950 1300,880
               L1300,1000 L-300,1000 Z"
          />
          <path
            className="fog-path fog-path-3"
            d="M-300,900
               C-100,880 0,920 200,900
               C400,880 600,920 800,900
               C1000,880 1200,920 1300,900
               L1300,1000 L-300,1000 Z"
          />
        </svg>
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-white/10 hover:bg-gray-700/50 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
