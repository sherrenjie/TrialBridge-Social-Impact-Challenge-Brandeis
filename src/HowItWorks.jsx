import React from 'react'
import { Link } from 'react-router-dom'

function HowItWorks() {
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
            <Link to="/how-it-works" className="text-lilac-deep font-semibold hover:text-lilac transition-colors">How It Works</Link>
            <Link to="/find-trials" className="bg-lilac text-white px-6 py-2.5 rounded-full font-semibold hover:bg-lilac-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lilac/30 transition-all">Find Trials</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            How <span className="text-lilac-deep">TrialBridge</span> Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A streamlined approach to connecting you with clinical trials that match your health profile and research interests.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-lilac-light via-lilac to-lilac-deep hidden md:block"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex items-start gap-12">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-white border-4 border-lilac rounded-full flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-lilac-deep">01</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Create Your Profile</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Begin with a brief questionnaire designed to understand your health background, 
                      current interests, and geographic location. This information enables us to identify 
                      the most relevant clinical trials for your specific needs.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Demographic information and health history</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Health conditions and research areas of interest</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Location preferences for trial participation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex items-start gap-12">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-white border-4 border-lilac rounded-full flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-lilac-deep">02</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Intelligent Matching</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Our platform leverages ClinicalTrials.gov, the most comprehensive clinical research 
                      database, to identify studies that align with your profile. We prioritize trials that 
                      actively seek female participants and address women's health conditions.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Real-time database queries for active trials</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Prioritization of female-inclusive research criteria</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Geographic filtering for nearby opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex items-start gap-12">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-white border-4 border-lilac rounded-full flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-lilac-deep">03</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Review Results</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Access a curated list of clinical trials with information presented in clear, 
                      accessible language. Each trial listing includes essential details about study 
                      objectives, eligibility criteria, and participation requirements.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Plain language summaries of complex research protocols</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Transparent eligibility requirements and time commitments</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Highlighted indicators for women's health focus</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex items-start gap-12">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-white border-4 border-lilac rounded-full flex items-center justify-center relative z-10">
                      <span className="text-2xl font-bold text-lilac-deep">04</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Take Action</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Once you've identified a trial of interest, we provide direct pathways to connect 
                      with research coordinators. Access official study documentation and receive guidance 
                      on the enrollment process and what to expect as a participant.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Direct contact information for research teams</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Links to official trial protocols and consent forms</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-lilac-deep rounded-full"></div>
                        <span>Resources explaining the clinical trial process</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Platform Highlights</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lilac-soft rounded-full mb-6">
                <div className="w-8 h-8 border-2 border-lilac-deep rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Setup</h3>
              <p className="text-gray-600 leading-relaxed">
                Profile creation takes approximately 5 minutes with intuitive, guided questions.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lilac-soft rounded-full mb-6">
                <div className="w-8 h-8 border-2 border-lilac-deep rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Always Free</h3>
              <p className="text-gray-600 leading-relaxed">
                No fees, no subscriptions, no hidden costs. Access to all features at no charge.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-lilac-soft rounded-full mb-6">
                <div className="w-8 h-8 border-2 border-lilac-deep rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">On-Demand Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Search and review clinical trials anytime, with information updated continuously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-lilac to-lilac-deep text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Begin Your Search</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Take the first step toward participating in clinical research that advances women's health.
          </p>
          <Link 
            to="/find-trials"
            className="inline-block bg-white text-lilac-deep px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 hover:shadow-xl transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-7xl mx-auto px-8">
          <p className="opacity-70 text-sm">&copy; 2025 TrialBridge. Empowering women's health through research participation.</p>
        </div>
      </footer>
    </div>
  )
}

export default HowItWorks