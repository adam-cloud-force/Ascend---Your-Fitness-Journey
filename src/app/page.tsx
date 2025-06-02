'use client';

import React from 'react';

export default function Home() {
  return (
    <>
      <div className="cloud cloud-1" />
      <div className="cloud cloud-2" />
      <div className="cloud cloud-3" />
      
      <div className="space-y-16 relative">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold gradient-text animate-fade-in-up">
            Elevate Your Potential
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Transform your fitness journey with personalized workouts, expert guidance, and cutting-edge tracking.
          </p>
          <div className="flex gap-6 justify-center animate-fade-in-up delay-400">
            <a
              href="/signup"
              className="btn-primary"
            >
              Join Now
            </a>
            <a
              href="/about"
              className="btn-primary"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-600">
          <div className="card group">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text">Workout Mastery</h3>
            <p className="text-gray-400">
              Reach new heights with personalized workout plans and progress tracking.
            </p>
          </div>
          <div className="card group">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text">Peak Performance</h3>
            <p className="text-gray-400">
              Optimize your hydration and recovery with smart monitoring and insights.
            </p>
          </div>
          <div className="card group">
            <h3 className="text-xl font-semibold text-white mb-3 group-hover:gradient-text">Expert Guidance</h3>
            <p className="text-gray-400">
              Learn from the best with professional guidance and form correction.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-900/20 backdrop-blur-sm p-8 rounded-2xl border border-white/[0.08] animate-fade-in-up delay-600">
          <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
            Ready to Rise Above?
          </h2>
          <p className="text-gray-400 mb-6">
            Join the community of achievers who have transformed their lives with Ascend.
          </p>
          <a
            href="/signup"
            className="btn-primary"
          >
            Start Your Journey
          </a>
        </section>
      </div>

      {/* Organic Fog Effect */}
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
    </>
  );
}
