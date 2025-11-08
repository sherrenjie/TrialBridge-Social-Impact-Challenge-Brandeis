import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
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
              Take control of your health journey. Find nearby, relevant, and safe clinical trials 
              designed with women's health in mind.
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lilac-light to-transparent"></div>
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-12">
          {/* Problem Card */}
          <div className="bg-white p-12 rounded-3xl border-2 border-pink-200 shadow-lg shadow-lilac/8 hover:-translate-y-2 hover:shadow-xl hover:shadow-lilac/15 transition-all duration-300 relative overflow-hidden animate-fadeInUp">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-300 to-lilac"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-15 h-15 bg-gradient-to-br from-pink-100 to-pink-300 rounded-2xl flex items-center justify-center animate-pulse-slow">
                <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
              </div>
              <h3 className="text-3xl font-bold text-lilac-deep">The Problem</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Many women don't join clinical trials because information is hard to find 
              or written in inaccessible language.
            </p>
            <div className="flex gap-8 items-center p-8 bg-gradient-to-br from-lilac-soft to-lilac/10 rounded-2xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              <div className="flex-1 text-center relative z-10">
                <div className="text-5xl font-extrabold text-lilac-deep leading-none mb-2 animate-countUp">22%</div>
                <div className="text-sm text-gray-600 font-medium leading-tight">of clinical trial participants are women</div>
              </div>
              <div className="w-0.5 h-15 bg-gradient-to-b from-transparent via-lilac to-transparent"></div>
              <div className="flex-1 text-center relative z-10">
                <div className="text-5xl font-extrabold text-lilac-deep leading-none mb-2 animate-countUp">2x</div>
                <div className="text-sm text-gray-600 font-medium leading-tight">more likely to be underdiagnosed</div>
              </div>
            </div>
            <div className="p-6 bg-pink-50 border-l-4 border-pink-300 rounded-xl text-base leading-relaxed text-gray-600">
              <strong className="text-lilac-deep font-semibold">The Result:</strong> Women face higher rates of misdiagnosis, delayed treatment, 
              and adverse drug reactions because research doesn't include them.
            </div>
          </div>
          
          {/* Solution Card */}
          <div className="bg-white p-12 rounded-3xl border-2 border-lilac shadow-lg shadow-lilac/8 hover:-translate-y-2 hover:shadow-xl hover:shadow-lilac/15 transition-all duration-300 relative overflow-hidden animate-fadeInUp delay-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lilac to-lilac-deep"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-15 h-15 bg-gradient-to-br from-lilac-soft to-lilac-light rounded-2xl flex items-center justify-center animate-pulse-slow">
                <div className="w-6 h-6 bg-white rounded-full opacity-90"></div>
              </div>
              <h3 className="text-3xl font-bold text-lilac-deep">Our Solution</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A web platform that matches women with nearby, relevant, and safe clinical 
              trials based on their health interests and demographics.
            </p>
            <div className="flex flex-col gap-5 mt-8">
              <div className="flex items-center gap-4 p-4 px-6 bg-gradient-to-br from-lilac-soft to-white rounded-xl hover:bg-gradient-to-br hover:from-lilac-light hover:to-lilac-soft hover:translate-x-2 transition-all animate-slideInRight delay-300">
                <div className="min-w-7 w-7 h-7 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center flex-shrink-0 relative">
                  <div className="w-1.5 h-3 border-white border-r-2 border-b-2 transform rotate-45 -mb-0.5"></div>
                </div>
                <span className="text-gray-800 font-medium text-lg">Simple, accessible language</span>
              </div>
              <div className="flex items-center gap-4 p-4 px-6 bg-gradient-to-br from-lilac-soft to-white rounded-xl hover:bg-gradient-to-br hover:from-lilac-light hover:to-lilac-soft hover:translate-x-2 transition-all animate-slideInRight delay-400">
                <div className="min-w-7 w-7 h-7 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center flex-shrink-0 relative">
                  <div className="w-1.5 h-3 border-white border-r-2 border-b-2 transform rotate-45 -mb-0.5"></div>
                </div>
                <span className="text-gray-800 font-medium text-lg">Female-inclusive trial filtering</span>
              </div>
              <div className="flex items-center gap-4 p-4 px-6 bg-gradient-to-br from-lilac-soft to-white rounded-xl hover:bg-gradient-to-br hover:from-lilac-light hover:to-lilac-soft hover:translate-x-2 transition-all animate-slideInRight delay-500">
                <div className="min-w-7 w-7 h-7 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center flex-shrink-0 relative">
                  <div className="w-1.5 h-3 border-white border-r-2 border-b-2 transform rotate-45 -mb-0.5"></div>
                </div>
                <span className="text-gray-800 font-medium text-lg">Personalized trial matching</span>
              </div>
              <div className="flex items-center gap-4 p-4 px-6 bg-gradient-to-br from-lilac-soft to-white rounded-xl hover:bg-gradient-to-br hover:from-lilac-light hover:to-lilac-soft hover:translate-x-2 transition-all animate-slideInRight delay-600">
                <div className="min-w-7 w-7 h-7 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center flex-shrink-0 relative">
                  <div className="w-1.5 h-3 border-white border-r-2 border-b-2 transform rotate-45 -mb-0.5"></div>
                </div>
                <span className="text-gray-800 font-medium text-lg">Location-based recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-center text-5xl font-bold text-gray-800 mb-12">How TrialBridge Works</h2>
          <div className="grid grid-cols-4 gap-8 mt-12">
            <div className="p-10 bg-gradient-to-br from-lilac-soft to-white rounded-2xl text-center border border-lilac-light hover:-translate-y-2 hover:shadow-xl hover:shadow-lilac/15 transition-all">
              <div className="w-15 h-15 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg shadow-lilac/25">1</div>
              <h4 className="text-2xl font-bold text-lilac-deep mb-4">Simple Profile</h4>
              <p className="text-gray-600 leading-relaxed">Tell us about your age, health conditions, and location in a quick, easy form.</p>
            </div>
            <div className="p-10 bg-gradient-to-br from-lilac-soft to-white rounded-2xl text-center border border-lilac-light hover:-translate-y-2 hover:shadow-xl hover:shadow-lilac/15 transition-all">
              <div className="w-15 h-15 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg shadow-lilac/25">2</div>
              <h4 className="text-2xl font-bold text-lilac-deep mb-4">Smart Matching</h4>
              <p className="text-gray-600 leading-relaxed">We search ClinicalTrials.gov to find trials that match your unique profile.</p>
            </div>
            <div className="p-10 bg-gradient-to-br from-lilac-soft to-white rounded-2xl text-center border border-lilac-light hover:-translate-y-2 hover:shadow-xl hover:shadow-lilac/15 transition-all">
              <div className="w-15 h-15 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg shadow-lilac/25">3</div>
              <h4 className="text-2xl font-bold text-lilac-deep mb-4">Women-Focused</h4>
              <p className="text-gray-600 leading-relaxed">We highlight trials with female-inclusive criteria and research.</p>
            </div>
            <div className="p-10 bg-gradient-to-br from-lilac-soft to-white rounded-2xl text-center border border-lilac-light hover:-translate-y-2 hover:shadow-xl hover:shadow-lilac/15 transition-all">
              <div className="w-15 h-15 bg-gradient-to-br from-lilac to-lilac-deep rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 shadow-lg shadow-lilac/25">4</div>
              <h4 className="text-2xl font-bold text-lilac-deep mb-4">Clear Information</h4>
              <p className="text-gray-600 leading-relaxed">Understand gender gaps in research with our "Did You Know?" facts panel.</p>
            </div>
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
      <footer className="bg-gray-800 text-white py-8 text-center mt-auto">
        <div className="max-w-7xl mx-auto px-8">
          <p className="opacity-80 text-sm">&copy; 2025 TrialBridge. Empowering women's health through research participation.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home