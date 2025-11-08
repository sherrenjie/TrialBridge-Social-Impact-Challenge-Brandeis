import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from './assets/image.png'

function WhyThisMatters() {
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
            <Link to="/why-this-matters" className="text-lilac-deep font-semibold hover:text-lilac transition-colors">Why This Matters</Link>
            <Link to="/find-trials" className="bg-lilac text-white px-6 py-2.5 rounded-full font-semibold hover:bg-lilac-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lilac/30 transition-all">Find Trials</Link>
          </div>
        </div>
      </nav>

       {/* Hero Section with Background Image */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Why This <span className="text-lilac-deep">Matters</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            The gender gap in medical research isn't just a statistic—it's a crisis affecting millions of women's lives. 
            Understanding the scope of this problem is the first step toward change.
          </p>
        </div>
      </section>

      {/* Misdiagnosis Crisis */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Misdiagnosis Crisis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Women face systematic barriers to accurate diagnosis, leading to delayed treatment and worse health outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100">
              <div className="text-center">
                <div className="text-7xl font-bold text-pink-accent mb-4">7.9M</div>
                <div className="h-1 w-32 bg-gradient-to-r from-pink-accent to-lilac mx-auto mb-4"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  women are <span className="font-semibold text-gray-900">misdiagnosed each year</span> in the United States
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="text-center">
                <div className="text-7xl font-bold text-lilac-deep mb-4">66%</div>
                <div className="h-1 w-32 bg-gradient-to-r from-lilac to-pink-accent mx-auto mb-4"></div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-900">more likely</span> for women to be misdiagnosed than men
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-lilac-soft rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-lilac-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Why This Happens</h3>
                <p className="text-gray-600 leading-relaxed">
                  Gender bias in healthcare, lack of research on the female body, and variation in symptoms between sexes 
                  contribute to this alarming disparity. One study showed that women were diagnosed later than men for more than 700 diseases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Trial Representation */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Underrepresented in Research</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Despite being over half the population, women remain significantly underrepresented in clinical trials.
            </p>
          </div>

          {/* Visual Comparison Bars */}
          <div className="space-y-8 mb-12">
            {/* Early-phase trials */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Early-Phase Clinical Trials</h3>
                <span className="text-3xl font-bold text-pink-accent">29-34%</span>
              </div>
              <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-accent to-lilac flex items-center justify-end pr-4"
                  style={{ width: '34%' }}
                >
                  <span className="text-white font-semibold text-sm">Women</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">In industry-sponsored early-phase trials</p>
            </div>

            {/* Cardiovascular trials */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Cardiovascular Device Trials</h3>
                <span className="text-3xl font-bold text-lilac-deep">29%</span>
              </div>
              <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-lilac-deep to-lilac flex items-center justify-end pr-4"
                  style={{ width: '29%' }}
                >
                  <span className="text-white font-semibold text-sm">Women</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">Despite heart disease being the leading cause of death in women</p>
            </div>

            {/* Overall trials */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">All Published Trials (2016-22)</h3>
                <span className="text-3xl font-bold text-pink-accent">33%</span>
              </div>
              <div className="relative h-12 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-accent to-purple-400 flex items-center justify-end pr-4"
                  style={{ width: '33%' }}
                >
                  <span className="text-white font-semibold text-sm">Women</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-2">Across 195 trials published between 2016-2022</p>
            </div>
          </div>

          <div className="bg-lilac-soft rounded-xl p-8 border border-lilac-light">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-lilac-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Progress in Device Trials</h3>
                <p className="text-gray-700 leading-relaxed">
                  The percentage of women in pivotal device trials did not increase between 2010 and 2020, 
                  showing a troubling lack of progress in addressing this representation gap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Context */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Historical Exclusion</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-16 h-16 mx-auto mb-6 text-pink-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-2xl leading-relaxed mb-6">
                "Women were traditionally <span className="text-pink-accent font-bold">excluded from drug trials</span> due to unfounded 
                fear that women's hormones would 'skew' test results."
              </p>
              <p className="text-gray-400 text-sm">
                This misguided policy has had lasting consequences on women's healthcare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Drug Safety Issues */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Drug Safety Disparities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The lack of representation has real, dangerous consequences for women's health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-pink-accent">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-pink-accent/10 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-pink-accent">86</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Different Drug Responses</h3>
                  <p className="text-gray-600">drugs identified in 2020 study</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Women metabolize drugs more slowly than men, leading to higher exposure levels.
              </p>
              <div className="bg-pink-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Higher adverse effects in women:</span>
                  <span className="text-3xl font-bold text-pink-accent">96%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-lilac-deep">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-lilac-soft rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-lilac-deep">64%</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Medical Interventions</h3>
                  <p className="text-gray-600">disadvantage women (2024 analysis)</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Common medical interventions were found to have lower effectiveness or access for women.
              </p>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Disadvantage men:</span>
                  <span className="text-2xl font-bold text-lilac-deep">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Gap */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Research Funding Gap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Investment in women's health research is severely lacking compared to men's health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Female conditions */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-100 mb-6">
                <div className="text-6xl font-bold text-pink-accent mb-2">1%</div>
                <div className="h-1 w-24 bg-gradient-to-r from-pink-accent to-lilac mx-auto"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Female-Specific Research</h3>
              <p className="text-gray-600 leading-relaxed">
                In 2020, only 1% of healthcare research and innovation was invested in female-specific 
                conditions beyond oncology
              </p>
            </div>

            {/* CVD research */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 mb-6">
                <div className="text-6xl font-bold text-lilac-deep mb-2">4.5%</div>
                <div className="h-1 w-24 bg-gradient-to-r from-lilac to-pink-accent mx-auto"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cardiovascular Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Just 4.5% of coronary artery disease research funding is targeted at women, 
                despite it being their leading cause of death
              </p>
            </div>
          </div>

          {/* Startup Funding Comparison */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">Healthcare Startup Funding (2019-2023)</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-pink-accent mb-2">$1.24B</div>
                <p className="text-gray-300 mb-4">11 startups addressing men's health concerns (erectile dysfunction, etc.)</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-400 mb-2">$44M</div>
                <p className="text-gray-300 mb-4">8 startups addressing endometriosis</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400 text-lg">
                That's <span className="text-pink-accent font-bold">28× more funding</span> for men's health conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disease-Specific Issues */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Disease-Specific Disparities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cardiovascular risk */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-pink-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Cardiovascular Disease</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                45% of women age 20+ are living with some form of cardiovascular disease, yet risk factors affect them more severely:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 text-2xl font-bold text-pink-accent">2×</div>
                  <p className="text-gray-700">Smoking increases women's heart attack risk up to twice as much as men's</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 text-2xl font-bold text-pink-accent">80%</div>
                  <p className="text-gray-700">High blood pressure increases women's risk 80% more than men</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-20 text-2xl font-bold text-pink-accent">50%</div>
                  <p className="text-gray-700">Type 2 diabetes increases women's risk 50% more than men</p>
                </div>
              </div>
            </div>

            {/* Endometriosis */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-lilac-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">Endometriosis</h3>
              </div>
              <div className="text-center mb-6">
                <div className="text-6xl font-bold text-lilac-deep mb-2">7-10</div>
                <div className="h-1 w-32 bg-gradient-to-r from-lilac to-pink-accent mx-auto mb-3"></div>
                <p className="text-xl font-semibold text-gray-900">years to diagnosis</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                On average, women in the U.S. wait 7 to 10 years for an accurate endometriosis diagnosis. 
                Many are told for years that their crippling pelvic pain is "normal" period pain, IBS, 
                or even psychosomatic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-lilac to-lilac-deep text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Be Part of the Solution</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Every woman who participates in clinical research helps close this gap. 
            Your participation matters—not just for you, but for all women.
          </p>
          <Link 
            to="/find-trials"
            className="inline-block bg-white text-lilac-deep px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 hover:shadow-xl transition-all"
          >
            Find Clinical Trials
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

export default WhyThisMatters