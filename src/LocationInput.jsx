import React, { useState, useEffect } from 'react'

function LocationInput({ formData, handleChange, updateLocationData }) {
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const [locationDetected, setLocationDetected] = useState(false)
  const [locationError, setLocationError] = useState('')
  const [mapUrl, setMapUrl] = useState('')

  // Update map when coordinates change
  useEffect(() => {
    if (formData.latitude && formData.longitude) {
      // Generate static map URL using OpenStreetMap tiles via StaticMaps API
      const lat = formData.latitude
      const lon = formData.longitude
      const zoom = 12
      const width = 600
      const height = 300
      
      // Using OpenStreetMap static map service
      const url = `https://www.openstreetmap.org/export/embed.html?bbox=${lon-0.05},${lat-0.05},${lon+0.05},${lat+0.05}&layer=mapnik&marker=${lat},${lon}`
      setMapUrl(url)
    }
  }, [formData.latitude, formData.longitude])

  const getCoordinates = () => {
    setIsGettingLocation(true)
    setLocationError('')

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser. Please enter your location manually.')
      setIsGettingLocation(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        
        console.log('Location detected:', latitude, longitude)
        
        // IMMEDIATELY save coordinates
        const locationData = {
          latitude,
          longitude
        }
        
        // Update coordinates right away
        updateLocationData(locationData)
        setLocationDetected(true)
        setIsGettingLocation(false)
        setLocationError('')

        try {
          // Add a small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
            {
              headers: {
                'User-Agent': 'TrialBridge/1.0'
              }
            }
          )
          
          if (!response.ok) {
            throw new Error('Geocoding service unavailable')
          }
          
          const data = await response.json()
          console.log('Address resolved:', data)
          
          const addressData = {}
          if (data.address) {
            if (data.address.city || data.address.town || data.address.village) {
              addressData.city = data.address.city || data.address.town || data.address.village
            }
            
            if (data.address.state) {
              addressData.state = data.address.state
            }
            
            if (data.address.postcode) {
              addressData.zipCode = data.address.postcode
            }
          }
          
          // Update address if we got it
          if (Object.keys(addressData).length > 0) {
            updateLocationData(addressData)
            console.log('Address auto-filled successfully')
          }
        } catch (error) {
          console.warn('Could not auto-fill address (rate limit or network issue):', error)
        }
      },
      (error) => {
        console.error('Geolocation error:', error)
        setIsGettingLocation(false)
        
        let errorMessage = ''
        switch (error.code) {
          case 1:
            errorMessage = 'Location access denied. Please allow location access in your browser settings or enter your address manually.'
            break
          case 2:
            errorMessage = 'Location information unavailable. Please ensure location services are enabled on your device.'
            break
          case 3:
            errorMessage = 'Location request timed out. Please try again or enter your address manually.'
            break
          default:
            errorMessage = 'Unable to determine location. Please enter your address manually.'
        }
        
        setLocationError(errorMessage)
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0
      }
    )
  }

  const getRadiusInMiles = () => {
    const radiusMap = {
      'within-10-miles': 10,
      'within-25-miles': 25,
      'within-50-miles': 50,
      'within-100-miles': 100,
      'anywhere': 500
    }
    return radiusMap[formData.willingToTravel] || 25
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Location & Availability</h3>
        <p className="text-sm text-gray-600">
          Provide your location to find clinical trials near you. Your exact coordinates enable precise distance-based matching.
        </p>
      </div>
      
      {/* Auto-detect Location */}
      <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            Automatic Location Detection
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            Allow your browser to detect your location for the most accurate trial matching. 
            Your coordinates will be used only to calculate distances to trial sites and will be stored securely.
          </p>
        </div>
        
        {!locationDetected && (
          <button
            type="button"
            onClick={getCoordinates}
            disabled={isGettingLocation}
            className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
              isGettingLocation
                ? 'bg-gray-300 text-gray-500 cursor-wait'
                : 'bg-lilac text-white hover:bg-lilac-deep hover:shadow-md'
            }`}
          >
            {isGettingLocation ? 'Detecting Location...' : 'Detect My Location'}
          </button>
        )}

        {locationDetected && (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">Location Confirmed</p>
                  <p className="text-xs text-green-700 mt-1">
                    Coordinates: {formData.latitude?.toFixed(6)}°N, {Math.abs(formData.longitude)?.toFixed(6)}°W
                  </p>
                  <p className="text-xs text-green-700">
                    Search radius: {getRadiusInMiles()} miles from your location
                  </p>
                  {(!formData.city || !formData.state) && (
                    <p className="text-xs text-green-700 mt-2 italic">
                      Note: Please enter your address manually below. Auto-fill may be temporarily unavailable.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Map Display */}
            {mapUrl && (
              <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                <iframe
                  width="100%"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={mapUrl}
                  title="Your Location"
                  className="w-full"
                ></iframe>
                <div className="p-3 bg-gray-50 border-t border-gray-200">
                  <p className="text-xs text-gray-600 text-center">
                    Approximate location marker. Exact coordinates are stored for precise trial matching.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {locationError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm font-medium text-red-900 mb-1">Location Detection Failed</p>
                <p className="text-sm text-red-700">{locationError}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Manual Location Entry */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h4>
        <p className="text-sm text-gray-600 mb-4">
          {locationDetected 
            ? 'Please verify the auto-detected address information below.' 
            : 'Enter your address to find nearby clinical trials.'}
        </p>
        
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
                City <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-gray-900 mb-2">
                State <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="e.g., Massachusetts"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="zipCode" className="block text-sm font-semibold text-gray-900 mb-2">
              ZIP Code <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
              required
            />
          </div>
        </div>
      </div>

      {/* Travel Distance */}
      <div>
        <label htmlFor="willingToTravel" className="block text-sm font-semibold text-gray-900 mb-2">
          Maximum Travel Distance <span className="text-red-600">*</span>
        </label>
        <p className="text-sm text-gray-600 mb-3">
          Select how far you are willing to travel for clinical trial appointments.
        </p>
        <select
          id="willingToTravel"
          name="willingToTravel"
          value={formData.willingToTravel}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lilac focus:border-transparent outline-none"
          required
        >
          <option value="within-10-miles">Within 10 miles</option>
          <option value="within-25-miles">Within 25 miles</option>
          <option value="within-50-miles">Within 50 miles</option>
          <option value="within-100-miles">Within 100 miles</option>
          <option value="anywhere">Anywhere in state</option>
        </select>
      </div>

      {/* Availability */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-2">
          Availability for Appointments
        </label>
        <p className="text-sm text-gray-600 mb-3">
          Select all time periods when you would be available for trial visits.
        </p>
        <div className="grid md:grid-cols-2 gap-3">
          {['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekends'].map((time) => (
            <label key={time} className="flex items-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="checkbox"
                name="availability"
                value={time}
                checked={formData.availability.includes(time)}
                onChange={handleChange}
                className="w-4 h-4 text-lilac-deep focus:ring-lilac rounded"
              />
              <span className="ml-3 text-sm text-gray-900">{time}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LocationInput