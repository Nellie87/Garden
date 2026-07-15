import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experiences from './components/Experiences'
import Gallery from './components/Gallery'
import Venue from './components/Venue'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <Gallery />
        <Venue />
        <Location />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  )
}
