import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import HowItWorks from './HowItWorks'
import FindTrials from './FindTrials'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/find-trials" element={<FindTrials />} />
      </Routes>
    </Router>
  )
}

export default App