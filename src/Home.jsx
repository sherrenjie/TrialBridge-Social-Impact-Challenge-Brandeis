import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
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
            <Link to="/find-trials" className="bg-lilac text-white px-6 py-2.5 rounded-full font-semibold hover:bg-lilac-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lilac/30 transition-all">Find Trials</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lilac-soft to-white py-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-[45fr_55fr] gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl leading-tight font-bold text-gray-800">
              Empowering Women Through <span className="text-lilac-deep bg-gradient-to-r from-lilac-light to-lilac bg-clip-text text-transparent">Clinical Trial Access</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Each year, 7.9 million women are misdiagnosed, and women are 75% more likely than men to experience adverse reactions to medications.
Why? Because less than 35% of trial participants are female, and most studies still exclude women of reproductive age.
TrialBridge empowers women by matching them with verified clinical trials that reflect their biology — not overlook it.
            </p>
            <div className="flex gap-4 mt-4">
            <Link to="/find-trials" className="bg-gradient-to-br from-lilac to-lilac-deep text-white px-8 py-4 rounded-full font-semibold shadow-lg shadow-lilac/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-lilac/40 transition-all inline-flex items-center justify-center">
                Find Your Trial
              </Link>
              <Link to="/about" className="bg-white text-lilac-deep border-2 border-lilac px-8 py-4 rounded-full font-semibold hover:bg-lilac-light hover:border-lilac-deep transition-all inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-lilac/25 hover:scale-[1.02] hover:shadow-lilac/30 transition-all">
            <img 
              src="/image.jpg" 
              alt="Diverse group of women supporting each other"
              className="w-full h-auto object-cover min-h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          {/* Problem Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Women remain significantly underrepresented in clinical research, creating serious gaps in healthcare.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <div className="text-5xl font-bold text-lilac-deep mb-2">22%</div>
                  <div className="h-1 w-20 bg-lilac mx-auto"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  of clinical trial participants are women, despite making up over half the population
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block mb-4">
                  <div className="text-5xl font-bold text-pink-accent mb-2">2×</div>
                  <div className="h-1 w-20 bg-pink-accent mx-auto"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  more likely to experience adverse drug reactions due to lack of representation
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block mb-4">
                  <div className="text-5xl font-bold text-lilac-deep mb-2">70%</div>
                  <div className="h-1 w-20 bg-lilac mx-auto"></div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  of women don't know how to find clinical trials that match their health needs
                </p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="border-t border-gray-200 pt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A streamlined platform connecting women with relevant clinical trials through accessible information and personalized matching.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-lilac-soft rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-lilac-deep rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Accessible Language</h3>
                    <p className="text-gray-600">Clear explanations of complex medical information without jargon</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-lilac-soft rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-pink-accent rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Female-Inclusive Filtering</h3>
                    <p className="text-gray-600">Prioritizing trials that actively seek women participants</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-lilac-soft rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-lilac-deep rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Matching</h3>
                    <p className="text-gray-600">Tailored trial recommendations based on your health profile</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-lilac-soft rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-5 h-5 bg-pink-accent rounded"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Location-Based Search</h3>
                    <p className="text-gray-600">Find nearby trials convenient to your daily life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-lilac-soft via-gray-50 to-lilac-light relative overflow-hidden" id="how-it-works">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-lilac/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How TrialBridge Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A seamless journey from profile creation to trial participation in four intuitive steps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lilac/20 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-lilac to-lilac-deep rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    01
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Create Your Profile</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Share basic information about your age, health interests, and location through our simple questionnaire.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-lilac-deep font-medium">
                  <div className="w-2 h-2 bg-lilac-deep rounded-full"></div>
                  <span>Takes less than 5 minutes</span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-accent/20 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-accent to-lilac rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    02
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Smart Matching</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our algorithm searches ClinicalTrials.gov to find trials that align with your profile and prioritize female-inclusive research.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-pink-accent font-medium">
                  <div className="w-2 h-2 bg-pink-accent rounded-full"></div>
                  <span>Personalized recommendations, save time and easy to use.</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lilac-light/30 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-lilac-light to-lilac rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    03
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Review Results</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Browse personalized trial listings with clear eligibility criteria, location details, and easy-to-understand descriptions.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-lilac-deep font-medium">
                  <div className="w-2 h-2 bg-lilac-deep rounded-full"></div>
                  <span>No medical jargon</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lilac-deep/20 to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-lilac-deep to-lilac rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    04
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Take Action</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  Connect directly with research coordinators and receive guidance on what to expect throughout the enrollment process.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-pink-accent font-medium">
                  <div className="w-2 h-2 bg-pink-accent rounded-full"></div>
                  <span>Direct contact information</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-action */}
          <div className="text-center mt-16">
            <Link 
              to="/find-trials" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-lilac to-lilac-deep text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <span>Start Your Search</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lilac to-lilac-deep text-white text-center" id="find-trials">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-xl mb-10 opacity-95">Join thousands of women making informed decisions about clinical trial participation.</p>
          <Link to="/find-trials" className="bg-white text-lilac-deep px-12 py-5 rounded-full text-lg font-semibold hover:bg-lilac-light hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20 transition-all inline-block">
            Get Started Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-8">
          <p className="opacity-70 text-sm">&copy; 2025 TrialBridge. Empowering women's health through research participation.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home