import React from 'react'

function TrialCard({ trial }) {
  // Build ClinicalTrials.gov URL
  const clinicalTrialsUrl = `https://clinicaltrials.gov/study/${trial.nctId}`
  
  // Check if we have actual contact information
  const hasContactInfo = trial.contact?.name || trial.contact?.phone || trial.contact?.email
  
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-lilac transition-all">
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
        {trial.distance && (
          <span className="text-gray-500">({trial.distance})</span>
        )}
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
        <div className="text-sm">
          {hasContactInfo ? (
            <div className="text-gray-600">
              {trial.contact.name && (
                <p className="font-medium text-gray-900 mb-1">{trial.contact.name}</p>
              )}
              <div className="flex flex-col gap-0.5">
                {trial.contact.phone && (
                  <p className="text-gray-600">{trial.contact.phone}</p>
                )}
                {trial.contact.email && (
                  <p className="text-gray-600">{trial.contact.email}</p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 italic">
              Contact information available on ClinicalTrials.gov
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <a
            href={clinicalTrialsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-lilac text-lilac-deep rounded-lg font-medium hover:bg-lilac-soft transition-all"
          >
            View Full Details
          </a>
          <a
            href={clinicalTrialsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-lilac text-white rounded-lg font-medium hover:bg-lilac-deep transition-all"
          >
            Contact Study
          </a>
        </div>
      </div>
    </div>
  )
}

export default TrialCard