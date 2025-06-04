'use client'

import React from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 