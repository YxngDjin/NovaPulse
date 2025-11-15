import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import VideoScroll from './components/VideoScroll'

const App = () => {
  return (
    <main>
        <Navbar />
        <Hero />
        <VideoSection />
        <VideoScroll />
    </main>
  )
}

export default App