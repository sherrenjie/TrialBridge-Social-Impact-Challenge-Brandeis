import React from 'react'

function ProgressBar({ currentStep, totalSteps = 4 }) {
  const steps = [
    { number: 1, label: 'Basic Info' },
    { number: 2, label: 'Location' },
    { number: 3, label: 'Health' },
    { number: 4, label: 'Preferences' }
  ]

  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        {steps.map((step) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all ${
                step.number <= currentStep 
                  ? 'bg-gradient-to-br from-lilac to-lilac-deep text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {step.number}
              </div>
              <span className={`text-sm text-gray-600 mt-2 whitespace-nowrap ${
                currentStep === step.number ? 'font-semibold text-lilac-deep' : ''
              }`}>
                {step.label}
              </span>
            </div>
            {step.number < totalSteps && (
              <div className={`flex-1 h-1 mx-4 transition-all ${
                step.number < currentStep ? 'bg-lilac' : 'bg-gray-200'
              }`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar