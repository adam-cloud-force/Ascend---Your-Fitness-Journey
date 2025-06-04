'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
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
      <section className="py-16">
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
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Start Your Fitness Journey Today</h2>
        <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl">
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
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
} 