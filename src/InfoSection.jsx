import React from 'react'

function InfoSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-white border border-gray-200 rounded-xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Did You Know?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-lilac-deep font-bold text-3xl mb-2">85%</div>
              <p className="text-gray-600 text-sm">
                of participants say trials improved their understanding of their health
              </p>
            </div>
            <div className="text-center">
              <div className="text-pink-accent font-bold text-3xl mb-2">Free</div>
              <p className="text-gray-600 text-sm">
                Most clinical trials provide treatment and care at no cost to participants
              </p>
            </div>
            <div className="text-center">
              <div className="text-lilac-deep font-bold text-3xl mb-2">24/7</div>
              <p className="text-gray-600 text-sm">
                Access to medical professionals throughout your participation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection