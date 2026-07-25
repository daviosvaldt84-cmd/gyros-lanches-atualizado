import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import PromoBanner from './components/PromoBanner'
import About from './components/About'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileActionBar from './components/MobileActionBar'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
        <PromoBanner />
        <About />
        <Reviews />
        <Location />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </div>
  )
}
