import React from 'react'

function HealthInfoStep({ formData, handleChange }) {
  const conditions = [
    'High blood pressure',
    'Diabetes',
    'Heart disease',
    'Thyroid disorder',
    'Depression/Anxiety',
    'None'
  ]

  return (
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
          {conditions.map((condition) => (
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
}

export default HealthInfoStep