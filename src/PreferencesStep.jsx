import React from 'react'

function PreferencesStep({ formData, handleChange }) {
  const researchInterests = [
    'Prevention studies',
    'Treatment trials',
    'Quality of life studies',
    'Diagnostic studies',
    'Women\'s health research'
  ]

  const motivations = [
    'Help advance medical research',
    'Access to new treatments',
    'Better understanding of my health',
    'Contribute to women\'s health',
    'Financial compensation'
  ]

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Preferences & Goals</h3>
      
      <div>
        <label className="block text-sm font-semibold text-gray-900 mb-3">
          What types of research are you interested in? (Select all that apply)
        </label>
        <div className="space-y-2">
          {researchInterests.map((interest) => (
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
          {motivations.map((motivation) => (
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
}

export default PreferencesStep