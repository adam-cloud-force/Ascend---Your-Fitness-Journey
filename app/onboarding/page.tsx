'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

type OnboardingStep = {
  title: string
  description: string
}

export default function Onboarding() {
  console.log('Onboarding page mounted')
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    experienceLevel: '',
    fitnessBackground: '',
    pushUps: '',
    pullUps: '',
    workoutFrequency: '',
    fitnessGoals: [] as string[],
    preferredTime: '',
    height: '',
    weight: ''
  })

  const steps: OnboardingStep[] = [
    {
      title: "Your Experience",
      description: "Tell us about your fitness background"
    },
    {
      title: "Current Capabilities",
      description: "Help us understand your fitness level"
    },
    {
      title: "Your Goals",
      description: "Let's set your fitness objectives"
    },
    {
      title: "Body Metrics",
      description: "For personalized workout plans"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      fitnessGoals: prev.fitnessGoals.includes(goal)
        ? prev.fitnessGoals.filter(g => g !== goal)
        : [...prev.fitnessGoals, goal]
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      // Submit data and redirect to dashboard
      router.push('/dashboard')
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Experience Level
              </label>
              <select
                name="experienceLevel"
                value={formData.experienceLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white"
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Fitness Background
              </label>
              <input
                type="text"
                name="fitnessBackground"
                value={formData.fitnessBackground}
                onChange={handleInputChange}
                placeholder="e.g., Running, Weight Training, Sports"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white placeholder-gray-400"
              />
            </div>
          </div>
        )

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How many push-ups can you do in one set?
              </label>
              <input
                type="number"
                name="pushUps"
                value={formData.pushUps}
                onChange={handleInputChange}
                placeholder="Enter number"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How many pull-ups can you do in one set?
              </label>
              <input
                type="number"
                name="pullUps"
                value={formData.pullUps}
                onChange={handleInputChange}
                placeholder="Enter number"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How often do you work out?
              </label>
              <select
                name="workoutFrequency"
                value={formData.workoutFrequency}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white"
              >
                <option value="">Select frequency</option>
                <option value="rarely">Rarely</option>
                <option value="1-2">1-2 times per week</option>
                <option value="3-4">3-4 times per week</option>
                <option value="5+">5+ times per week</option>
              </select>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                What are your fitness goals? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Build Muscle', 'Lose Weight', 'Improve Strength', 'Increase Endurance'].map((goal) => (
                  <label
                    key={goal}
                    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors
                              ${formData.fitnessGoals.includes(goal)
                                ? 'bg-blue-600/20 border-blue-500'
                                : 'bg-gray-700/50 border-gray-600 hover:bg-gray-700'}`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.fitnessGoals.includes(goal)}
                      onChange={() => handleCheckboxChange(goal)}
                      className="sr-only"
                    />
                    <span className="text-white">{goal}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred workout time
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white"
              >
                <option value="">Select time</option>
                <option value="morning">Morning</option>
                <option value="afternoon">Afternoon</option>
                <option value="evening">Evening</option>
                <option value="night">Night</option>
              </select>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder="Enter your height in centimeters"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="Enter your weight in kilograms"
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          text-white placeholder-gray-400"
              />
            </div>
          </div>
        )

      default:
        return null
    }
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
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex-1 ${index > 0 ? 'ml-2' : ''}`}
                >
                  <div
                    className={`h-2 rounded-full transition-colors
                              ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-600'}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Start</span>
              <span>Finish</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-400 mb-6">
              {steps[currentStep].description}
            </p>
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handleBack}
              className={`btn-secondary ${currentStep === 0 ? 'invisible' : ''}`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="btn-primary"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 