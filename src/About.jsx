import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Role Title",
      bio: "Short introduction about this team member and their background in women's health or tech. Placeholder for now.",
      image: "/placeholder-team-1.jpg"
    },
    {
      name: "Team Member 2",
      role: "Role Title",
      bio: "Short introduction about this team member and their background in women's health or tech. Placeholder for now.",
      image: "/placeholder-team-2.jpg"
    },
    {
      name: "Team Member 3",
      role: "Role Title",
      bio: "Short introduction about this team member and their background in women's health or tech. Placeholder for now.",
      image: "/placeholder-team-3.jpg"
    }
  ]

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
            <Link to="/about" className="text-lilac-deep font-semibold hover:text-lilac transition-colors">About</Link>
            <Link to="/how-it-works" className="text-gray-800 font-medium hover:text-lilac transition-colors">How It Works</Link>
            <Link to="/find-trials" className="bg-lilac text-white px-6 py-2.5 rounded-full font-semibold hover:bg-lilac-deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-lilac/30 transition-all">Find Trials</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            About <span className="text-lilac-deep">TrialBridge</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Closing the gender gap in clinical research through accessible, transparent trial matching.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section 
        className="py-24 bg-white relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/public/tree.png')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/50"></div>
        
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We envision a future where every woman has equal access to clinical research opportunities, 
              where medical treatments are developed with women's unique health needs in mind, and where 
              the gender gap in healthcare is finally closed.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem - Statistics */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Gender Gap in Research</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Women remain significantly underrepresented in clinical trials, leading to serious health disparities and safety concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-block mb-6">
                <div className="text-6xl font-bold text-lilac-deep mb-2">22%</div>
                <div className="h-1 w-24 bg-gradient-to-r from-lilac to-pink-accent mx-auto"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Only 22% of clinical trial participants are women, despite making up over half the population
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block mb-6">
                <div className="text-6xl font-bold text-pink-accent mb-2">2×</div>
                <div className="h-1 w-24 bg-gradient-to-r from-pink-accent to-lilac mx-auto"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Women are twice as likely to experience adverse drug reactions due to lack of representation in trials
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block mb-6">
                <div className="text-6xl font-bold text-lilac-deep mb-2">70%</div>
                <div className="h-1 w-24 bg-gradient-to-r from-lilac to-pink-accent mx-auto"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Up to 70% of women report not knowing how to find clinical trials that match their health needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Approach</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-lilac-soft flex items-center justify-center rounded-lg mb-4">
                  <div className="w-6 h-6 bg-lilac-deep rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Accessibility</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Breaking down complex medical jargon into clear, accessible language that everyone can understand. 
                We ensure that clinical trial information is transparent and easy to navigate.
              </p>
            </div>

            <div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-lilac-soft flex items-center justify-center rounded-lg mb-4">
                  <div className="w-6 h-6 bg-pink-accent rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Representation</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Highlighting trials that actively seek female participants and address women's health conditions. 
                We prioritize studies that contribute to closing the gender gap in medical research.
              </p>
            </div>

            <div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-lilac-soft flex items-center justify-center rounded-lg mb-4">
                  <div className="w-6 h-6 bg-lilac-deep rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Empowerment</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Giving women the tools and information to make informed decisions about their health journey. 
                We facilitate connections between participants and researchers conducting meaningful studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to making clinical trials more accessible and inclusive for women.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                {/* Profile Picture Placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-lilac-soft to-lilac-light flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                  <div className="text-7xl text-lilac-deep font-bold">
                    {member.name.charAt(0)}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lilac-deep font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-lilac to-lilac-deep text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-10 opacity-95 leading-relaxed">
            Together, we can bridge the gender gap in clinical research and create better health outcomes for all women.
          </p>
          <Link 
            to="/find-trials"
            className="inline-block bg-white text-lilac-deep px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 hover:shadow-xl transition-all"
          >
            Find Your Trial
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

export default About