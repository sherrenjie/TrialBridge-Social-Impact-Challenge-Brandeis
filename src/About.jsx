import React from 'react';
import { Link } from 'react-router-dom';
import treeImageUrl from './assets/tree.png';
import sherrenImage from './assets/sherren.png';
import jasmineImage from './assets/jasmine.jpeg';
import mariaImage from './assets/Maria.png';

function About() {
  const teamMembers = [
    {
      name: "Sherren Jie",
      role: "Senior at Brandeis, Computer Science",
      bio: "I love building apps that make a real impact! I have experience in full-stack development and am passionate about improving healthcare access for women",
      image: sherrenImage
    },
    {
      name: "Jasmine Huang",
      role: "Senior at Brandeis, Computer Science & Business",
      bio: "I'm very passionate about women's health and think there are a lot of areas for research within women's health that can continue to advance with the help of technology.",
      image: jasmineImage
    },
    {
      name: "Maria Koraicho",
      role: "Senior at Brandeis, Business & Legal Studies Minor",
      bio: "Maria is interested in the intersection of business, policy, and women's health advocacy, helping bridge gaps between technology and impact.",
      image: mariaImage
    }
  ];

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
            <Link to="/why-this-matters" className="text-gray-800 font-medium hover:text-lilac transition-colors">Why This Matters</Link>
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
        style={{ backgroundImage: `url(${treeImageUrl})` }}
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

      {/* Background Section - NEW */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">The Historical Context</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Understanding how we got here is essential to understanding why change is so urgently needed.
            </p>
          </div>

          {/* Timeline visual */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lilac via-pink-accent to-lilac-deep hidden md:block"></div>

            {/* Timeline items */}
            <div className="space-y-8 md:space-y-12">
              {/* 1940s-1950s */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-6 md:mb-0">
                    <div className="inline-block md:block">
                      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border border-pink-100 shadow-sm">
                        <div className="text-3xl font-bold text-pink-accent mb-2">1940s-1950s</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">The Exclusion Era</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          For decades, male investigators published scientific articles based only on male subjects. 
                          When asked to justify their decisions, they blamed it on women's hormones.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-pink-accent rounded-full border-3 border-white shadow-md"></div>
              </div>

              {/* The Justification */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="hidden md:block"></div>
                  <div className="mb-6 md:mb-0">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-7 h-7 text-lilac-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <h3 className="text-lg font-bold text-gray-900">The "Hormone Problem"</h3>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        Researchers claimed that females were "more difficult to study" because of menstrual cycles. 
                        This became the standard justification for systematic exclusion.
                      </p>
                      <div className="bg-white rounded-lg p-3 border-l-4 border-lilac-deep">
                        <p className="text-sm text-gray-800 italic">
                          "Women's hormones would 'skew' test results"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">— Common reasoning used to exclude women</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-lilac-deep rounded-full border-3 border-white shadow-md"></div>
              </div>

              {/* The Consequences */}
              <div className="relative">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right mb-6 md:mb-0">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-5 border border-red-100 shadow-sm">
                      <div className="flex items-center justify-end gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">Lasting Impact</h3>
                        <svg className="w-7 h-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Women were systematically excluded from drug trials due to this unfounded fear. 
                        The consequences of these decisions continue to affect women's healthcare today, 
                        decades later.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </div>
                {/* Center dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-500 rounded-full border-3 border-white shadow-md"></div>
              </div>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="mt-10 bg-gradient-to-br from-lilac to-lilac-deep rounded-xl p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">This History Shapes Our Present</h3>
            <p className="text-base leading-relaxed max-w-3xl mx-auto opacity-95">
              The systematic exclusion of women from clinical research wasn't based on science—it was based on 
              bias. Today, we're still living with the consequences of those decisions, but we have the power to change it.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem - Statistics */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Gender Gap in Research</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Approximately 7,932,000 women are diagnosed each year.
              Only one percent of healthcare research and innovation was invested in female-specific conditions beyond oncology.
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
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated students committed to making clinical trials more accessible and inclusive for women.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                {/* Profile Picture */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
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