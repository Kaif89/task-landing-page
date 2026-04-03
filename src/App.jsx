import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TeamGrid from './components/TeamGrid'
import TomorrowSection from './components/TomorrowSection'
import HelpSection from './components/HelpSection'
import OffersSection from './components/OffersSection'
import Testimonials from './components/Testimonials'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TeamGrid />
        <TomorrowSection />
        <HelpSection />
        <OffersSection />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App