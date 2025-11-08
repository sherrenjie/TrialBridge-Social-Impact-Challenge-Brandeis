import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'
import LocationInput from './LocationInput'

function FindTrials() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)
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

  // Hardcoded trial data (keeping the same trials)
  const trials = [
    {
      id: 1,
      title: "Cardiovascular Health in Women",
      nctId: "NCT05234567",
      condition: "Cardiovascular Disease",
      phase: "Phase 3",
      location: "Boston, MA",
      distance: "2.3 miles",
      status: "Recruiting",
      femaleInclusive: true,
      description: "A study examining cardiovascular outcomes in women aged 40-65 with focus on hormone-related factors and disease progression.",
      eligibility: [
        "Women aged 40-65 years",
        "Diagnosed with cardiovascular disease",
        "No prior heart surgery"
      ],
      contact: {
        name: "Dr. Sarah Johnson",
        phone: "(617) 555-0123",
        email: "sjohnson@research.org"
      }
    },
    {
      id: 2,
      title: "Breast Cancer Prevention Study",
      nctId: "NCT05234568",
      condition: "Breast Cancer",
      phase: "Phase 2",
      location: "Cambridge, MA",
      distance: "5.1 miles",
      status: "Recruiting",
      femaleInclusive: true,
      description: "Investigating preventive interventions for women at high risk of breast cancer, focusing on lifestyle and medication approaches.",
      eligibility: [
        "Women aged 35-70 years",
        "Family history of breast cancer",
        "No current cancer diagnosis"
      ],
      contact: {
        name: "Dr. Emily Chen",
        phone: "(617) 555-0124",
        email: "echen@research.org"
      }
    },
    {
      id: 3,
      title: "Osteoporosis Treatment in Postmenopausal Women",
      nctId: "NCT05234569",
      condition: "Osteoporosis",
      phase: "Phase 3",
      location: "Waltham, MA",
      distance: "0.8 miles",
      status: "Recruiting",
      femaleInclusive: true,
      description: "Evaluating a new treatment approach for osteoporosis in postmenopausal women with emphasis on bone density improvement.",
      eligibility: [
        "Postmenopausal women aged 50+",
        "Diagnosed with osteoporosis",
        "No current bone medications"
      ],
      contact: {
        name: "Dr. Maria Rodriguez",
        phone: "(781) 555-0125",
        email: "mrodriguez@research.org"
      }
    },
    {
      id: 4,
      title: "Autoimmune Disease Management in Women",
      nctId: "NCT05234570",
      condition: "Autoimmune Disease",
      phase: "Phase 2",
      location: "Boston, MA",
      distance: "3.7 miles",
      status: "Recruiting",
      femaleInclusive: true,
      description: "Studying gender-specific factors in autoimmune disease progression and response to treatment in women.",
      eligibility: [
        "Women aged 18-60 years",
        "Diagnosed autoimmune condition",
        "Currently on stable medication"
      ],
      contact: {
        name: "Dr. Jennifer Williams",
        phone: "(617) 555-0126",
        email: "jwilliams@research.org"
      }
    }
  ]

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

  // Function specifically for updating location data from LocationInput component
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

    console.log('🚀 Submitting form data to Firebase:', formData)

    try {
      // Save to Firebase
      const docRef = await addDoc(collection(db, 'trial-searches'), {
        ...formData,
        createdAt: new Date().toISOString(),
        timestamp: Date.now()
      })
      
      console.log('✅ Document written with ID: ', docRef.id)
      
      // Show results
      setShowResults(true)
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } catch (error) {
      console.error('❌ Error adding document: ', error)
      alert('There was an error submitting your information. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderProgressBar = () => (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all ${
              step <= currentStep 
                ? 'bg-gradient-to-br from-lilac to-lilac-deep text-white' 
                : 'bg-gray-200 text-gray-500'
            }`}>
              {step}
            </div>
            {step < 4 && (
              <div className={`flex-1 h-1 mx-2 transition-all ${
                step < currentStep ? 'bg-lilac' : 'bg-gray-200'
              }`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span className={currentStep === 1 ? 'font-semibold text-lilac-deep' : ''}>Basic Info</span>
        <span className={currentStep === 2 ? 'font-semibold text-lilac-deep' : ''}>Location</span>
        <span className={currentStep === 3 ? 'font-semibold text-lilac-deep' : ''}>Health</span>
        <span className={currentStep === 4 ? 'font-semibold text-lilac-deep' : ''}>Preferences</span>
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="age" className="block text-sm font-semibold text-gray-900 mb-2">
            Age *
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Gender *
          </label>
          <div className="flex gap-4 pt-3">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className="w-4 h-4 text-lilac-deep focus:ring-lilac"
              />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className="w-4 h-4 text-lilac-deep focus:ring-lilac"
              />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleChange}
                className="w-4 h-4 text-lilac-deep focus:ring-lilac"
              />
              <span className="ml-2 text-gray-700">Other</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <LocationInput 
      formData={formData} 
      handleChange={handleChange}
      updateLocationData={updateLocationData}
    />
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Health Information</h3>
      
      <div>
        <label htmlFor="primaryCondition" className="block text-sm font-semibold text-gray-900 mb-2">
          Primary Health Condition or Area of Interest *
        </label>
        <select
          id="primaryCondition"
          name="primaryCondition"
          value={formData.primaryCondition}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
          required
        >
          <option value="">Select a condition</option>
          <option value="cardiovascular">Cardiovascular Disease</option>
          <option value="cancer">Cancer</option>
          <option value="osteoporosis">Osteoporosis</option>
          <option value="autoimmune">Autoimmune Disease</option>
          <option value="diabetes">Diabetes</option>
          <option value="menopause">Menopause</option>
          <option value="mental-health">Mental Health</option>
          <option value="reproductive-health">Reproductive Health</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          Do you have any other health conditions? (Select all that apply)
        </label>
        <div className="space-y-2">
          {['High blood pressure', 'Diabetes', 'Heart disease', 'Thyroid disorder', 'Depression/Anxiety', 'None'].map((condition) => (
            <label key={condition} className="flex items-center">
              <input
                type="checkbox"
                name="otherConditions"
                value={condition}
                checked={formData.otherConditions.includes(condition)}
                onChange={handleChange}
                className="w-4 h-4 text-lilac-deep focus:ring-lilac rounded"
              />
              <span className="ml-2 text-gray-700">{condition}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="currentMedications" className="block text-sm font-semibold text-gray-900 mb-2">
          Current Medications (Optional)
        </label>
        <textarea
          id="currentMedications"
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          rows="3"
          placeholder="List any medications you're currently taking..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none resize-none"
        />
      </div>

      <div>
        <label htmlFor="previousTrials" className="block text-sm font-semibold text-gray-900 mb-2">
          Have you participated in clinical trials before? *
        </label>
        <select
          id="previousTrials"
          name="previousTrials"
          value={formData.previousTrials}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
          required
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="not-sure">Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="healthcareProvider" className="block text-sm font-semibold text-gray-900 mb-2">
          Do you have a regular healthcare provider? *
        </label>
        <select
          id="healthcareProvider"
          name="healthcareProvider"
          value={formData.healthcareProvider}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
          required
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Preferences & Goals</h3>
      
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          What types of research are you interested in? (Select all that apply)
        </label>
        <div className="space-y-2">
          {[
            'Prevention studies',
            'Treatment trials',
            'Quality of life studies',
            'Diagnostic studies',
            'Women\'s health research'
          ].map((interest) => (
            <label key={interest} className="flex items-center">
              <input
                type="checkbox"
                name="researchInterests"
                value={interest}
                checked={formData.researchInterests.includes(interest)}
                onChange={handleChange}
                className="w-4 h-4 text-lilac-deep focus:ring-lilac rounded"
              />
              <span className="ml-2 text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="timeCommitment" className="block text-sm font-semibold text-gray-900 mb-2">
          How much time can you commit to trial participation? *
        </label>
        <select
          id="timeCommitment"
          name="timeCommitment"
          value={formData.timeCommitment}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
          required
        >
          <option value="">Select an option</option>
          <option value="minimal">Minimal (1-2 visits)</option>
          <option value="moderate">Moderate (3-6 visits)</option>
          <option value="significant">Significant (7+ visits)</option>
          <option value="ongoing">Ongoing/Long-term</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          What motivates you to participate in clinical research? (Select all that apply)
        </label>
        <div className="space-y-2">
          {[
            'Help advance medical research',
            'Access to new treatments',
            'Better understanding of my health',
            'Contribute to women\'s health',
            'Financial compensation'
          ].map((motivation) => (
            <label key={motivation} className="flex items-center">
              <input
                type="checkbox"
                name="motivations"
                value={motivation}
                checked={formData.motivations.includes(motivation)}
                onChange={handleChange}
                className="w-4 h-4 text-lilac-deep focus:ring-lilac rounded"
              />
              <span className="ml-2 text-gray-700">{motivation}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-semibold text-gray-900 mb-2">
          Additional Information (Optional)
        </label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
          rows="4"
          placeholder="Is there anything else you'd like us to know?"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none resize-none"
        />
      </div>
    </div>
  )

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
            {renderProgressBar()}
            
            <form onSubmit={handleSubmit}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}
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
                    {isSubmitting ? 'Submitting...' : 'Find Matching Trials'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Did You Know Section */}
      {!showResults && (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-8">
            <div className="bg-white border border-gray-200 rounded-xl p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Did You Know?</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-lilac-deep font-bold text-3xl mb-2">85%</div>
                  <p className="text-gray-600 text-sm">of participants say trials improved their understanding of their health</p>
                </div>
                <div className="text-center">
                  <div className="text-pink-accent font-bold text-3xl mb-2">Free</div>
                  <p className="text-gray-600 text-sm">Most clinical trials provide treatment and care at no cost to participants</p>
                </div>
                <div className="text-center">
                  <div className="text-lilac-deep font-bold text-3xl mb-2">24/7</div>
                  <p className="text-gray-600 text-sm">Access to medical professionals throughout your participation</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {showResults && (
        <section id="results" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Matching Trials</h2>
              <p className="text-lg text-gray-600">
                Based on your profile, we found {trials.length} clinical trials. All trials listed actively seek female participants.
              </p>
            </div>

            <div className="space-y-6">
              {trials.map((trial) => (
                <div
                  key={trial.id}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:border-lilac transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{trial.title}</h3>
                        {trial.femaleInclusive && (
                          <span className="px-3 py-1 bg-pink-accent/20 text-pink-accent text-xs font-semibold rounded-full">
                            Female-Inclusive
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="font-medium">{trial.nctId}</span>
                        <span>•</span>
                        <span>{trial.phase}</span>
                        <span>•</span>
                        <span className="text-green-600 font-medium">{trial.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-gray-700 mb-4">
                    <svg className="w-5 h-5 text-lilac-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{trial.location}</span>
                    <span className="text-gray-500">({trial.distance} away)</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {trial.description}
                  </p>

                  {/* Eligibility */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Eligibility Criteria:</h4>
                    <ul className="space-y-2">
                      {trial.eligibility.map((criterion, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-lilac-deep mt-1">•</span>
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact & Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      <p className="font-medium text-gray-900">{trial.contact.name}</p>
                      <p>{trial.contact.phone} • {trial.contact.email}</p>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-6 py-2 border border-lilac text-lilac-deep rounded-lg font-medium hover:bg-lilac-soft transition-all">
                        Learn More
                      </button>
                      <button className="px-6 py-2 bg-lilac text-white rounded-lg font-medium hover:bg-lilac-deep transition-all">
                        Contact Study
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-8">
          <p className="opacity-70 text-sm">&copy; 2025 TrialBridge. Empowering women's health through research participation.</p>
        </div>
      </footer>
    </div>
  )
}

export default FindTrials