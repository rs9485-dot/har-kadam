import Hero from './components/Hero'
import LogoIntro from './components/LogoIntro'
import VideoSection from './components/VideoSection'
import FeaturedCarousel from './components/FeaturedCarousel'
import Impact from './components/Impact'
import Celebrating from './components/Celebrating'
import MediaCoverage from './components/MediaCoverage'
import Timeline from './components/Timeline'
import FootprintTrail from './components/FootprintTrail'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <FootprintTrail className="trail-1" count={5} direction="down-right" />
      <LogoIntro />
      <FootprintTrail className="trail-2" count={4} direction="down-left" />
      <VideoSection />
      <FootprintTrail className="trail-3" count={0} direction="down-right" />
      <FeaturedCarousel />
      <FootprintTrail className="trail-4" count={8} direction="down-left" />
      <Impact />
      <FootprintTrail className="trail-5" count={4} direction="down-right" />
      <Celebrating />
      <FootprintTrail className="trail-6" count={5} direction="down-left" />
      <MediaCoverage />
      <FootprintTrail className="trail-7" count={3} direction="down-right" />
      <Timeline />
    </div>
  )
}

export default App
