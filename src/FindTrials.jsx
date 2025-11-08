import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'
import ProgressBar from './ProgressBar'
import BasicInfoStep from './BasicInfoStep'
import LocationInput from './LocationInput'
import HealthInfoStep from './HealthInfoStep'
import PreferencesStep from './PreferencesStep'
import InfoSection from './InfoSection'
import TrialCard from './TrialCard'
import { searchTrials } from './trialService'
import WhyThisMatters from './WhyThisMatters'

function FindTrials() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [trials, setTrials] = useState([])
  const [error, setError] = useState(null)
  const totalSteps = 4

  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: 'female',
    
    // Step 2: Location & Availability
    city: '',
    state: '',
    zipCode: '',
    latitude: null,
    longitude: null,
    willingToTravel: 'within-10-miles',
    availability: [],
    
    // Step 3: Health Information
    primaryCondition: '',
    otherConditions: [],
    currentMedications: '',
    previousTrials: '',
    healthcareProvider: '',
    
    // Step 4: Preferences & Goals
    researchInterests: [],
    timeCommitment: '',
    motivations: [],
    additionalInfo: ''
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      const currentArray = formData[name] || []
      if (checked) {
        setFormData({ ...formData, [name]: [...currentArray, value] })
      } else {
        setFormData({ ...formData, [name]: currentArray.filter(item => item !== value) })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const updateLocationData = (locationData) => {
    console.log('📍 Updating location data:', locationData)
    setFormData(prevData => ({
      ...prevData,
      ...locationData
    }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    console.log('🚀 Submitting form data:', formData)

    try {
      // Save to Firebase
      const docRef = await addDoc(collection(db, 'trial-searches'), {
        ...formData,
        createdAt: new Date().toISOString(),
        timestamp: Date.now()
      })
      
      console.log('✅ Document written with ID:', docRef.id)
      
      // Fetch trials from ClinicalTrials.gov API
      console.log('🔍 Searching for clinical trials...')
      const results = await searchTrials(formData)
      
      console.log(`✅ Found ${results.length} trials`)
      setTrials(results)
      setShowResults(true)
      
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } catch (error) {
      console.error('❌ Error:', error)
      setError(error.message || 'An error occurred while searching for trials')
      alert('There was an error finding trials. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep formData={formData} handleChange={handleChange} />
      case 2:
        return (
          <LocationInput 
            formData={formData} 
            handleChange={handleChange}
            updateLocationData={updateLocationData}
          />
        )
      case 3:
        return <HealthInfoStep formData={formData} handleChange={handleChange} />
      case 4:
        return <PreferencesStep formData={formData} handleChange={handleChange} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 py-5 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center text-2xl font-bold text-lilac-deep">
            <div className="w-2 h-2 bg-gradient-to-br from-lilac to-lilac-deep rounded-full mr-2"></div>
            <span className="tracking-tight">TrialBridge</span>
          </Link>
          <div className="flex gap-8 items-center">
            <Link to="/about" className="text-gray-800 font-medium hover:text-lilac transition-colors">About</Link>
            <Link to="/how-it-works" className="text-gray-800 font-medium hover:text-lilac transition-colors">How It Works</Link>
            <Link to="/why-this-matters" className="text-gray-800 font-medium hover:text-lilac transition-colors">Why This Matters</Link>
            <Link to="/find-trials" className="text-lilac-deep font-semibold">Find Trials</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Find Your <span className="text-lilac-deep">Clinical Trial</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Complete our questionnaire to discover clinical trials that match your profile.
          </p>
        </div>
      </section>

      {/* Form Section */}
      {!showResults && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-8">
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
            
            <form onSubmit={handleSubmit}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
                {renderStep()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-gradient-to-r from-lilac to-lilac-deep text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-lilac to-lilac-deep text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Searching...
                      </span>
                    ) : 'Find Matching Trials'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Did You Know Section */}
      {!showResults && <InfoSection />}

      {/* Results Section */}
      {showResults && (
        <section id="results" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Matching Trials</h2>
              {trials.length > 0 ? (
                <p className="text-lg text-gray-600">
                  Based on your profile, we found {trials.length} clinical trial{trials.length !== 1 ? 's' : ''} near you.
                </p>
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <p className="text-lg text-yellow-800 mb-2">
                    No trials found matching your criteria.
                  </p>
                  <p className="text-sm text-yellow-700">
                    Try expanding your search distance or adjusting your health condition preferences.
                  </p>
                  <button
                    onClick={() => {
                      setShowResults(false)
                      setCurrentStep(1)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg font-medium hover:bg-yellow-700 transition-all"
                  >
                    Modify Search
                  </button>
                </div>
              )}
            </div>

            {trials.length > 0 && (
              <>
                <div className="space-y-6 mb-8">
                  {trials.map((trial) => (
                    <TrialCard key={trial.id} trial={trial} />
                  ))}
                </div>
                
                {/* New Search Button */}
                <div className="text-center mt-12">
                  <button
                    onClick={() => {
                      setShowResults(false)
                      setTrials([])
                      setCurrentStep(1)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-all"
                  >
                    Start New Search
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-8">
          <p className="opacity-70 text-sm">
            &copy; 2025 TrialBridge. Empowering women's health through research participation.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default FindTrials